let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
let value1 = document.getElementById("consultations").value;
let value2 = document.getElementById("Health___Checkups").value;
let value3 = document.getElementById("Medicines").value;
let value4 = document.getElementById("Health________Checkups").value;
let value5 = document.getElementById("Dialysis").value;
let sum = parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4)+parseInt(value5)/10;
let total = document.getElementById("total");
total.innerText=total.innerHTML=sum;
console.log(`Your Total Price ${sum} and 10% Off !`);
});



