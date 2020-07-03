const arrayBox = [
    "Cat",
    "Hat",
    "Jat",
    "Bat",
    "Drat"
];

let i = 0;

//go backward in the array by one
backArray = () => {
   if (i === 0) {
       i = arrayBox.length;
   }
   i = i -1;
   document.getElementById("output").innerHTML = arrayBox[i];
    
}

//go forward in the array by one
forwardArray = () => {
   if (i === arrayBox.length -1){
       i = 0;
   } else {
       i++;
   }
    document.getElementById("output").innerHTML = arrayBox[i];
}


//default output 
document.getElementById("output").innerHTML = arrayBox[4];


