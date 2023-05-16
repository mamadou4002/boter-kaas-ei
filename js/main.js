const images = document.querySelectorAll('.img-box');

//default settings
let turn = false;

function placeXO(data) {
   // console.log(data);
    if(data.target.attributes[0].nodeValue == "img/blank.png") {
        if(turn == false) {
            data.target.attributes[0].nodeValue = "img/x.png"
            turn = true;
            document.getElementById("turn").innerText= "o turn"
        }
        else{
            data.target.attributes[0].nodeValue = "img/o.png"
            turn = false;
            document.getElementById("turn").innerText="x turn"
        }
    }
   // console.log(images[0].src);
    checkWin();
}

function checkWin(){

     const boxes = document.querySelectorAll('.img-box');
     console.log(boxes)
     if (boxes[0].src== '/css tic tak to/img/x.png' && 
            boxes[1].src== '/css tic tak to/img/x.png' &&
            boxes[2].src== '/css tic tak to/img/x.png' ) {
            console.log("x wins")
        }

    if(boxes[3].src=="/css tic tak to/img/x.png" &&
            boxes[4].src=="/css tic tak to/img/x.png" &&
            boxes[5].src=="/css tic tak to/img/x.png" ){ 
            console.log("x wins")
            }
    if(boxes[6].src=="/css tic tak to/img/x.png" &&
             boxes[7].src=="/css tic tak to/img/x.png" &&
             boxes[8].src=="/css tic tak to/img/x.png"){
             console.log("x wins")
        }
    
     for (let i = 0; i < boxes.length; i++) {
        console.log( i + ' ' + boxes[i].src);

     }
     if(boxes[0].src=="/css tic tak to/img/x.png" &&
     boxes[4].src=="/css tic tak to/img/x.png" &&
     boxes[8].src=="/css tic tak to/img/x.png"){
     console.log("x wins")
}
if(boxes[2].src=="/css tic tak to/img/x.png" &&
             boxes[4].src=="/css tic tak to/img/x.png" &&
             boxes[6].src=="/css tic tak to/img/x.png"){
             console.log("x wins")
        }

        if(boxes[0].src=="/css tic tak to/img/x.png" &&
             boxes[3].src=="/css tic tak to/img/x.png" &&
             boxes[6].src=="/css tic tak toe/img/x.png"){
             console.log("x wins")
        }
    
     for (let i = 0; i < boxes.length; i++) {
        console.log( i + ' ' + boxes[i].src);

     }

for (let i = 0; i < boxes.length; i++) {
console.log( i + ' ' + boxes[i].src);

}
}
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', placeXO)
}

while(images[0].src == "/css tic tak to/img/x.png"){
    console.log("jah");
}

console.log('loaded');