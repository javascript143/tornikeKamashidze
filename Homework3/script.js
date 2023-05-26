

// კვარდრატში აყვანა ხერხი - 1

// let a = prompt('გთხოვთ ჩაწეროთ როცხვი');
// let b = Math.pow();
// console.log(a*a);




// კვარდრატში აყვანა ხერხი - 2

let num = prompt('ჩაწერეთ რიცხვი')
function square(x)
{
let result = x * x;
alert ("შენი არჩეული რიცხვის კვადრატია = "   + result);
}
square(num);


// ცელსიუსის ფერენგეიტში გადაყვანა

function convert(){
let c = document.getElementById('data').value;
let f = (c * 1.8) + 32;
document.getElementById('res').innerText = `${c} C = ${f} F`;
}


// სტრიქონის უკუღმა შეტრიალება 

let str = "Tornike"
console.log(str);

let output = str.split('').reverse();
console.log(output);


// დაშვებული შეცდომა

let action = "move"

switch(action){
case "move":
alert("You are moving!")
break;
case "Jump":
alert("You are jumping!")
break;
case "run":
    alert("You are running!")
    default:
        alert("Invalid action")

}

