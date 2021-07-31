
var firebaseConfig = {
      apiKey: "AIzaSyCBMZMvpS6v7_4796J-7X_bPpfInrq0jsY",
      authDomain: "kwitter-web-app-4ea99.firebaseapp.com",
      databaseURL: "https://kwitter-web-app-4ea99-default-rtdb.firebaseio.com",
      projectId: "kwitter-web-app-4ea99",
      storageBucket: "kwitter-web-app-4ea99.appspot.com",
      messagingSenderId: "399482308599",
      appId: "1:399482308599:web:7a8a57734854ad196110f2",
      measurementId: "G-G2KPM4ETTR"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " +user_name + "!";
    
    function addRoom(){
          room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
      
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
