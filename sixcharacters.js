var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";

var phrases = sentence.replace(/\./g, "").split(" ");

console.log(phrases);

function checksix(word) {
  if(word.length === 6){
    return true;
  } else {
    return false;
  }
}

var sixvarchar = phrases.filter(checksix);

sixcvarchar = sixvarchar.length;
console.log(sixvarchar); 
