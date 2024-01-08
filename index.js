let inputMail = document.getElementById("inputmail");
let inputPassword = document.getElementById("inputpassword") ;
console.log(inputPassword);
console.log(inputMail);


function login(){
    if (inputMail == inputPassword){
        window.location.href='homepage.html';
    } else {
        alert("invalid username or password")
    }
}
