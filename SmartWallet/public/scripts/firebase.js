var app_firebase = {};
(function(){
    var config = {
        apiKey: "AIzaSyCyN0fsDkBqYqNoIWgeySXhOw1mvdQx3mM",
        authDomain: "smartwallet-f11b6.firebaseapp.com",
        databaseURL: "https://smartwallet-f11b6.firebaseio.com",
        projectId: "smartwallet-f11b6",
        storageBucket: "smartwallet-f11b6.appspot.com",
        messagingSenderId: "27744097839"
      };
      firebase.initializeApp(config);

      app_firebase = firebase;
})()