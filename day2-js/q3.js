"use strict"

prompt(" Enter your email :", " here");
var a =prompt(" Enter your email :");


function validate(email) {
    var atIndex = email.indexOf("@");
  
    if (atIndex > 0 && atIndex < email.length - 1) {
      return true;
    } else {
      return false;
    }
  }


