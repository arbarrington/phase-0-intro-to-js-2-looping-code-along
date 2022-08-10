// Code your solutions in this file


function writeCards(name,event) {
    let array1 = [];
    for (const element of name) {
    array1.push(`Thank you, ${element}, for the wonderful ${event} gift!`);
    }  return array1;
}

function countDown(num1) {
    for (let i = num1; i > -1; i--) {
        console.log(i);
    }
}