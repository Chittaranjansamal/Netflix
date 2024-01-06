let inputMail = document.getElementById("inputmail").innerText;
let inputPassword = document.getElementById("inputpassword").innerText ;
console.log(inputPassword);
console.log(inputMail);


function login(){
    if (inputMail == inputPassword){
        window.location.href='homepage.html';
    } else {
        alert("invalid username or password")
    }
}