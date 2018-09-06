$('button').click(function(){
  $('button').toggleClass('active');
  $('.title').toggleClass('active');
  $('nav').toggleClass('active');
});

var mainApp = {};

(function(){
    var firebase = app_firebase;
    var uid1 = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid1 = user.uid;
            document.getElementById('user').innerHTML = user.displayName;
            checkInfo();
        }else{
            uid1= null;
            window.location.replace('/');
        }
    });

    function logOut(){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;

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

            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                if(base[k].uid == uid1){
                    document.getElementById('meta').innerHTML = base[k].meta + ".00 MXN";
                    document.getElementById('gasto').innerHTML = base[k].gasto + ".00 MXN";
                }
            }
        }

        ref = database.ref('usuarioTarjeta');
        ref.on('value', gotData2, errData);

        function gotData2(data){
          var base = data.val();
          var keys = Object.keys(base);
         console.log(keys);

         for (var i = 0; i < keys.length; i++) {
             var k = keys[i];
             if(base[k].uid == uid1){
                 document.getElementById('tar').innerHTML = base[k].numero;
             }
          }
        }

        function errData(err){
            console.log(err);
        }
    }

})()