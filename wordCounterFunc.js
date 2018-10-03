

window.onload = function toDo(){

      let text = "A horse is a horse, of course, of course," + "</br>"+

    "And no one can talk to a horse of course,"+"<br>"+

    "That is, of course, unless the horse is the famous Mr. Ed."+"<br>"

    document.getElementById("text").innerHTML = text;
    let repetitions= 0;
    let foundAtPosition=0;

while (foundAtPosition != -1){
  foundAtPosition = text.indexOf("horse", foundAtPosition);

        if (foundAtPosition != -1){
              repetitions++;
              foundAtPosition++;

        }
}

let answer = document.getElementById("repeted").innerHTML = "</br>The word horse is repeated "+repetitions
+" times."

let str1 = "Javascript";
let str2 = "Javascript";

let mysubstr1 = str1.substring(5);
alert(mysubstr1);




};
