function loginFunction(){

    
    var tempusername=document.getElementById("username").value;
    var temppassword=document.getElementById("password").value;

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
    
    window.location.reload();
    return true;

}