// Code your solutions in this file
const messages = []

function writeCards(stringName, eventName) {
    for(let i = 0; i<stringName.length; i++) {

        messages.push((`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`));
    }

return messages;
}
function countDown(integerPos) {
    let i = integerPos;
    while(i >= 0){
        console.log(i--);
    }
}

countDown(10);