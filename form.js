var firebaseConfig = {
    apiKey: "AIzaSyBUd1tT_CE3TibpZCQ2dsmf9bBPNZ8Ga60",
    authDomain: "krizen-4cc77.firebaseapp.com",
    projectId: "krizen-4cc77",
    storageBucket: "krizen-4cc77.appspot.com",
    messagingSenderId: "710745925047",
    appId: "1:710745925047:web:d906d1ac65eea46cfbb432",
    measurementId: "G-X17CZKGBYC"
    
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth =  firebase.auth();
   
    //signup function
     function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
  
      const promise = auth.createUserWithEmailAndPassword(email.value,password.value).then((usercredential)=>{
        var user=usercredential.user;
        promise.catch(e=>alert(e.message));
      alert("SignUp Successfully");
      })
      .catch((error)=>{
        var errorCode=error.code;
        var errorMessage=error.message;
      });
    }
  
  function writeData(){
    var database = firebase.database();
        var UserName=document.getElementById("UserName").value;
        var Age=document.getElementById("Age").value;
        function writeUserData(UserName, email, Age) {
  firebase.database().ref('users').set({
    username: UserName,
    email: email,
    Age: Age
  });
  }
}
    //signIN function
    function  signIn(){
      var email = document.getElementById("email");
      var password  = document.getElementById("password");
      const promise = auth.signInWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>alert(e.message));  
    }
  
  
    //signOut
  
    function signOut(){
      auth.signOut();
      alert("SignOut Successfully from System");
    }
  
    //active user to homepage
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        var uid = user.uid;
        alert("Active user ");
  
      }else{
        alert("No Active user Found")
      }
    })

c 