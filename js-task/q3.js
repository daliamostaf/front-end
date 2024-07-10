"use strict"
prompt(" Enter today's temperature", " here");
var a =prompt("Enter today's temperature");
var result = temperature();



function temperature(a){
    
    if (a>=30){
        document.write("HOT");
    }

    else if(a<=30){
        document.write("COLD");

    }
    
}