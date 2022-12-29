

// function reSignup(){
//     window.location.href = "sign-up.html"
// }






function store() {
    var inputName = document.getElementById('name');
    localStorage.setItem("name", inputName.value);
    var inputEmail = document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
    var inputPassword = document.getElementById('pw');
    localStorage.setItem("password", inputPassword.value);


}

// var storedEmail = localStorage.getItem("email");
// var storedPassword = localStorage.getItem("password")
// var lgemail = document.getElementById('lgemail').value
// var lgpw = document.getElementById('lgpw').value



function login() {

    var storedEmail = localStorage.getItem("email");

    var storedPassword = localStorage.getItem("password");

    var lgemail = document.getElementById('lgemail').value;

    var lgpw = document.getElementById('lgpw').value;

    if (storedEmail !== lgemail && storedPassword !== lgpw) {
        alert("Wrong Email/Password");

    }
    else {
        window.location = ("index.html");
        // document.getElementById('username').innerHTML = ("LOL");
        // return 
        // document.querySelector("#username").innerHTML = "JavaScript";

        alert("You Have Been Logged In Successfully!")


    }

}