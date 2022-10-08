const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent)

const phrases = ["Software Engineer...","Developer...","Coder...","Data Engineer..."];

let letterIndex=0;
let phraseIndex=0;
const typingSpeed=150;
const erasingSpeed=75;
function printLetters(phrase){
    if(letterIndex==phrase.length){
        clearLetters();
    }
    else if (letterIndex<phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex+=1;
        setTimeout(function(){
            printLetters(phrase)
        },typingSpeed)
    }
    
}

function clearLetters(){
    if(letterIndex==-1){
        phraseIndex=(phraseIndex+1)% phrases.length;
        letterIndex=0;
        printLetters(phrases[phraseIndex]);
    }
    else if(letterIndex>-1){
        let updatePhrase="";
        for(let i=0;i<letterIndex;i++){
            updatePhrase +=phrases[phraseIndex].charAt(i);
        }
        dynamicContent.textContent=updatePhrase;
        letterIndex-=1;
        setTimeout(clearLetters,erasingSpeed);
    }
}

printLetters(phrases[phraseIndex])