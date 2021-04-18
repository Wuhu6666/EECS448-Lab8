function Validator(){
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;

    if((pw1 != pw2))
    {
        alert("The passwords entered don't match\nPlease try again");
    }
    else if((pw1.length < 8) || (pw2.length < 8))
    {
        alert("the passwords are not at least 8 characters long\nPlease try again");
    }
    else
    {
        alert("Password is verified!");
    }

}