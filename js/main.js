let wins=0
let computerwins=0


//default settings
let turn = false;
//turn=false betekent speler
//turn=true betekent computer

function placeXO(data) {
    // console.log(data);
    if (data.target.attributes[0].nodeValue == "img/blank.png") {
        if (turn == false) {
            data.target.attributes[0].nodeValue = "img/x.png"
            turn = true;
            document.getElementById("turn").innerText = "o turn"
            ComputerMove()

        }
        
    }
    // console.log(images[0].src);
    checkWin();
}
function ComputerMove(){
    let allboxes=document.querySelectorAll(".img-box")
    let emptyboxes=[]

    for (let i=0;i< allboxes.length;i++){
        if(allboxes[i].src.includes("blank")){
            emptyboxes.push(allboxes[i]);
        }
    }

    console.log(emptyboxes)
    emptyboxes[Math.floor(Math.random() * emptyboxes.length)].src="img/o.png"
    turn=false
}

function checkWin() {

    const boxes = document.querySelectorAll('.img-box');
    if (boxes[0].src == 'http://127.0.0.1:5500/img/x.png' &&
        boxes[1].src == 'http://127.0.0.1:5500/img/x.png' &&
        boxes[2].src == 'http://127.0.0.1:5500/img/x.png') {
        console.log("x wins")
        resetGame(true)
    }

    if (boxes[3].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[4].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[5].src == "http://127.0.0.1:5500/img/x.png") {
        console.log("x wins")
        resetGame(true)
    }
    if (boxes[6].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[7].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[8].src == "http://127.0.0.1:5500/img/x.png") {
        console.log("x wins")
        resetGame(true)
    }

   
    if (boxes[0].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[4].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[8].src == "http://127.0.0.1:5500/img/x.png") {
        console.log("x wins")
        resetGame(true)
    }
    if (boxes[2].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[4].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[6].src == "http://127.0.0.1:5500/img/x.png") {
        console.log("x wins")
        resetGame(true)
    }

    if (boxes[0].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[3].src == "http://127.0.0.1:5500/img/x.png" &&
        boxes[6].src == "http://127.0.0.1:5500/img/x.png") {
        console.log("x wins")
        resetGame(true)
    }

    let isPossible=false
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].src.toString().includes("blank")){
            isPossible=true
        }

    }
    if(isPossible==false){
        resetGame()
    }

    document.getElementById("wins").innerText=wins
    document.getElementById("computerwins").innerText=computerwins

    
}

function resetGame(gewonnen){
    const boxes=document.querySelectorAll(".img-box")

    for(let i =0;i<boxes.length;i++){
        boxes[i].src="img/blank.png"
       boxes[i].addEventListener("click",placeXO)
    }
    turn=false

    if (gewonnen != null) {
        if (gewonnen==true) {
            wins+=1
        }
        
        if(gewonnen==false){
            computerwins+=1
        }
    }
    
}

resetGame()