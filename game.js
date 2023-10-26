let canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

/*Buttons*/
const playButton = document.querySelector('#play-button'); 

/* Window events */

window.addEventListener('keydown',moveBykeys);

let canvasSize;
let elementsSize;

playButton.addEventListener('click',starGame);

btnUp.addEventListener('click',moveUp);
btnLeft.addEventListener('click',moveLeft);
btnRight.addEventListener('click',moveRight);
btnDown.addEventListener('click',moveDown);


function setCanvasSize() {
    window.addEventListener('resize', starGame);
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
      } else {
        canvasSize = window.innerHeight * 0.8;
      }
      
      canvas.setAttribute('width', canvasSize);
      canvas.setAttribute('height', canvasSize);
      
      elementsSize = (canvasSize / 10); 
}
function starGame() {
    let divGameMenu = document.querySelector('#game-menu');
    divGameMenu.classList.add('none');
    let divGameContainer = document.querySelector('#game-container');
    divGameContainer.classList.remove('none');
    canvas.classList.remove('none');
    setCanvasSize();
    renderGame();    
}
function renderGame(){

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';
    const map = maps[1];
    
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map((row)=> row.trim().split(''))

    mapRowCols.forEach((row,rowI) => {
        row.forEach((col,colI)=>{
            const emoji = emojis[col];
            const posX = elementsSize*(colI+1);
            const posY = elementsSize*(rowI+1);
            game.fillText(emoji,posX,posY);
        })
    });
}
function moveBykeys(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if(event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();  
}
function moveUp(){
    console.log('Arriba');
}
function moveLeft(){
    console.log('Izquierda');
}
function moveRight(){
    console.log('Derecha');
}
function moveDown(){
    console.log('Abajo');
}



