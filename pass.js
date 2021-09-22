function generatePassword(){
let letters = "DFGTWsdcgr5r3w94$6738edihy5&edcfgt#rft65%wfFDSVedfdr3e2edDsgerfgt3edgrFTTE{}";
let password ="";
 for (let i = 0; i < 24 ; i++) {
     password+=letters[Math.floor(Math.random()*76)];
     
 }
 document.getElementById("p1").innerHTML= password;
}
 
 
