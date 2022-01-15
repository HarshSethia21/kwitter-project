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
roomname=localStorage.getItem("roomname")
function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=" "
}