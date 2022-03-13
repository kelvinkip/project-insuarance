// // Function to refresh the form after submition
// function formRefresh(){
//     document.getElementById("form_data").reset();
// }

// // Event function on button
// function akanNames(){

//     var birthDate=document.getElementById("birthdate").value;
//     var dateEntered= birthDate.split("-");
//     var day=parseInt(dateEntered[2]);
//     var month=parseInt(dateEntered[1]);
//     var year=parseInt(dateEntered[0]);

//     //Centuary calculation
//     var centry=(year-1)/100+1; 
//     var dayOfTheWeek = ( centry/4 -2*centry-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;
        
//     document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
//     var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
//     var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
//     var gender=document.getElementById("gender").value;
//     var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     var dOfWeek = Math.round(dayOfTheWeek)

//     //form validation and output
//     if(!isNaN(dOfWeek)){
//         if(gender=="Male"){
//             document.getElementById("display").innerHTML= "Your akan names is"+ maleNames[Math.round(dayOfTheWeek)]+" and you were born on "+ daysOfWeek[dOfWeek];
//         }
//         else if(gender==="Female"){
//             document.getElementById("display").innerHTML="You were born on "+daysOfWeek[dOfWeek]+ " and Your akan name is " + femaleNames[Math.round(dayOfTheWeek)];
//         }else{
//             alert("Enter valid dates and choose your gender");
//             document.getElementById("display").innerHTML="";
//         }
//     }
//             else{
//                 alert("Enter valid birthday and choose your gender");
//                 document.getElementById("display").innerHTML="";
//             }
    
    
//     //call to the reFresh function
//     formRefresh();
// }