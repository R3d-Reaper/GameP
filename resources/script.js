/*
function toMain() {
    window.location.href="main.html";
}
*/

/*
let regButton = document.querySelector("#registration-button");

regButton.addEventListener("click", checkFields)

let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let birthdate = document.getElementById("birthdate").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let conPassword = document.getElementById("confirm-password").value;

function checkFields(event) {
    if (fname == "") {
        alert(No);
        event.preventDefault()
    }
}
*/
/************************************************************************************************************************************************************/

//Login

/*
const loginBtn = document.querySelector("#login-submit");

loginBtn.addEventListener("click", invalidClick, false)

function invalidClick(event) {
    event.preventDefault()
    let errorMsg = "Invalid login credentials";
    document.getElementById("invalid-error").innerHTML += errorMsg;
    
}
*/

/*
function prevent(event) {
    let loginUser = document.getElementById("login-ue").value;

    if(loginUser == "" ) {
        alert('asdfdfsa');
    }
}
*/


//Registration

function checkFields(event) {
     let fname = document.getElementById("fname").value;
     let lname = document.getElementById("lname").value;
     let age = document.getElementById("age").value;
     let birthdate = document.getElementById("birthdate").value;
     let username = document.getElementById("username").value;
     let password = document.getElementById("password").value;
     let conPassword = document.getElementById("confirm-password").value;

    
     if (fname == "" || lname == "" || age == "" || birthdate == "" || username == "" || password == "" || conPassword == "") {
         alert('Fill out the remaining fields first');
     } else if (password != conPassword) {
         alert('Password do not match');
         event.preventDefault();
     } else if (password == conPassword) {
        event.preventDefault();
        alert('Registration successful! Now using registration credentials in login...');
        window.open('./main.html', '_self');
     }
}





