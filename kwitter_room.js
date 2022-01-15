var firebaseConfig = {
      apiKey: "AIzaSyDiHzbnBH-ArChA_C20Pg7JEfZGpdIqf4A",
      authDomain: "kwitter-c5430.firebaseapp.com",
      databaseURL: "https://kwitter-c5430-default-rtdb.firebaseio.com",
      projectId: "kwitter-c5430",
      storageBucket: "kwitter-c5430.appspot.com",
      messagingSenderId: "465919819391",
      appId: "1:465919819391:web:961252a2c1a1898626c94a",
      measurementId: "G-T0GR26B49V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username")
document.getElementById("username").innerHTML = "welcome" + username + "!"

function addroom() {
      roomname = document.getElementById("input2").value
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      })
      localStorage.setItem("roomname", roomname)
      window.location = "kwitterpage.html"
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("roomname-"+Room_names)
                  row="<div class='roomname' id="+Room_names+"onclick='redirecttoroomnames(this.id)'>#"+Room_names+"</div><hr>"
                  document.getElementById("output").innerHTML+=row

                  //End code
            });
      });
}
getData();
function redirecttoroomnames(name){
      console.log(name)
      localStorage.setItem("roomname",name)
      window.location="kwitterpage.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location.replace("index.html")
}