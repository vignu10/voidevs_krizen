 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUd1tT_CE3TibpZCQ2dsmf9bBPNZ8Ga60",
    authDomain: "krizen-4cc77.firebaseapp.com",
    projectId: "krizen-4cc77",
    storageBucket: "krizen-4cc77.appspot.com",
    messagingSenderId: "710745925047",
    appId: "1:710745925047:web:d906d1ac65eea46cfbb432",
    measurementId: "G-X17CZKGBYC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//signupfunction
function signUp()
{
    var email=document.getElementById("email");
    var password=document.getElementById("password");
     

    const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("SignUp Successful");
}

//login
function logIn(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    const promise=auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

}

//logout


function logOut()
{
    auth.signOut();
    alert("Successfully logged out")
}


//active User to homePage

firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    {
        var email=user.email;
        alert("Active user"+email);
    }
    else{
        alert("No Active User found ")
    }
})
