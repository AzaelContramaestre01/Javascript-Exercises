const text = "Hello mom, this is Azael from Chile testing new ways of Javascript, i want you proud!";

let index = 0;

function writeText(){
    document.body.innerText = text.slice (0, index);
    
    index++;

    if(index > text.length - 1)(
        index = 0
    )
}

setInterval(writeText, 100)