var mainApp = {};

(function(){
    var firebase = app_firebase;
    var uid1 = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid1 = user.uid;
            checkInfo();
        }else{
            uid1= null;
            window.location.replace('/');
        }
    });

    database = firebase.database();
    var ref = database.ref('usuarioMetas');

    var data= {
        uid : "",
        gasto : 0,
        meta : 0
    }

    checkInfo();

    function checkInfo(){
        var ref = database.ref('usuarioMetas');
        ref.on('value', gotData, errData);

        var llaves;
        var bandera;

        function gotData(data){
             var base = data.val();
             var keys = Object.keys(base);
            console.log(keys);
            bandera = false;

            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                if(base[k].uid == uid1){
                    console.log("Ya hay un registro con ese usuario");
                    bandera = true;
                }
            }

            if(bandera){
                window.location.replace('menu.html')
            }else{
            }
        }

        function errData(err){
            console.log(err);
        }
    }

    function mandaInfo(){
        data.uid = uid1;
        data.meta = document.getElementById("meta").value;
        data.gasto = document.getElementById("gasto").value;
        ref.push (data);
        window.location.replace('cardInfo.html')
    }

    mainApp.mandaInfo = mandaInfo;
})()