
var namePattern=/^[a-zA-Z]{3,}([a-zA-Z]{3,})*$/;
var emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)?(com\.eg|net\.eg|edu\.eg|org\.eg)$/;

function validatename(){
prompt("Enter your full name");
var fullName = prompt(" ");


if (!fullName) {

    alert("Full Name is required");

    return validatename();

} else if (namePattern.test(fullName) && !fullName.startsWith(" ") && !fullName.endsWith(" ")) 
{

    return fullName;

} else {

    alert("Invalid Full Name format" );

    return validateFullName();

}
}



function validateEmail() {

    var email = prompt("Please enter your Email:" );

    

    if (!email) {

        alert("Email is required.");

        return validateEmail();

    } else if (emailPattern.test(email)) {

        return email;

    } else {

        alert("Invalid Email FormData, try again  ");

        return validateEmail();

    }

}









