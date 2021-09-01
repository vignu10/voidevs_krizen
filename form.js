//signupfunction
function signUp()
{
    var email=document.getElementById("email");
    var password=document.getElementById("password");
     

    const promise=auth.createUserWithEmailAndPassword(email.value.password.value);
    promise.catch(e=>alert(e.message));
    alert("SignUp Successful");
}

//login
function logIn(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    const promise=auth.signInWithEmailAndPassword(email.value.password.value);
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
