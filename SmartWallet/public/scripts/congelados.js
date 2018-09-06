function graphs(meta, ahorro) {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Ahorrado", "Restante"],
            datasets: [{
                label: 'Meta: 6000',
                data: [ahorro, meta, 0],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
            ]
        }
    });
}
var rest = 0;
var metasas = 0;
var total = 0;
var uid1 = null;
(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid1 = user.uid;
        }else{
            uid1= null;
            window.location.replace('/');
        }
    });

        database = firebase.database();   
        var ref = database.ref('usuarioMetas');
        ref.on('value', gotData, errData);
        
        function gotData(data){
             var base = data.val();
             var keys = Object.keys(base);
            console.log(keys);
            
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                if(base[k].uid == uid1){
                    metasas = parseFloat(base[k].meta.toString())
                    rest = metasas;
                    document.getElementById('meta').innerHTML = "$"+ base[k].meta + ".00 MXN";
                    console.log( metasas);
                }
            }
        }

        ref = database.ref('usuarioAhorro');
        ref.on('value', gotData2, errData);

        function gotData2(data){
            var base = data.val();
            var keys = Object.keys(base);
            console.log(keys);
            
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                if(base[k].uid == uid1){
                    total += parseFloat(base[k].ahorro.toString());
                    
                }
            }
            console.log(total);
            var porcentaje = parseFloat((total)*100);
            porcentaje = porcentaje / metasas;
            console.log(porcentaje);
            metasas -= total;
            graphs(metasas, total);
            document.getElementById("porc").innerHTML = porcentaje + "%";
            document.getElementById("ahorrosT").innerHTML = "$" + total + ".00 MXN";
            console.log(total, metasas, porcentaje);
        }

        function errData(err){
            console.log(err);
        }

       
})()
function insertAhorro(){
    database = firebase.database();
    var ref = database.ref('usuarioAhorro');

    var data= {
        uid : "",
        ahorro : 0,
    }
    total = 0;
    metasas = rest;
    data.uid = uid1;
    data.ahorro = document.getElementById("ahorr").value;
    ref.push (data);
    //window.location.replace("congelados.html");
}