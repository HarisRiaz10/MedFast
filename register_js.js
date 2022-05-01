import { insertbuyer } from "./dummy/insertbuyer" ;

function registerFunction() {
    // var mysql = require('mysql');

    // var con = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: 'medfast'
    // });

    // con.connect(function(err) {
    // if (err) throw err;
    // console.log("Connected!");
    // });

let tempusername=document.registerform.username.value;
let temppassword=document.registerform.password.value;
let tempfirstname=document.registerform.firstname.value;
let templastname=document.registerform.lastname.value;
let tempmobilenum=document.registerform.mobilenumber.value;
let tempemail=document.registerform.email.value;

if(tempusername == ""){
    alert("Enter username!");
    tempusername.focus();
    return false;
}
if(temppassword == ""){
    alert("Enter password!");
    temppassword.focus();
    return false;
}
if(tempfirstname == ""){
    alert("Enter first name!");
    tempfirstname.focus();
    return false;
}
if(templastname == ""){
    alert("Enter last name!");
    templastname.focus();
    return false;
}
if(tempmobilenum == ""){
    alert("Enter mobile number!");
    tempmobilenum.focus();
    return false;
}
if(tempemail == ""){
    alert("Enter email!");
    tempemail.focus();
    return false;
}
else{
    insertbuyer(tempusername,temppassword,tempmobilenum,tempemail);
    console.log("In else condition")
}
alert("Account Created!");
window.location.reload();
return true;

}