const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
const ct = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 30;
let speed = 10;

let score = 0;
let pointx = Math.round(Math.random() * canvas.width);
let pointy = Math.round(Math.random() * canvas.height);
let rad = 20;


let upPressed = false;
let leftPressed = false;
let rightPressed = false;
let downPressed = false;

//Game Loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    checkPoint();
    point();
    updateScore();
    drawGreenBlob();
    

}

function boundaryCheck(){
    //up
    if ( y < radius){
        y = radius;
        
    }
    //down
    if (y > canvas.height - radius){
        y = canvas.height - radius;
    }
    //left
    if(x < radius){
        x = radius;
    }
    if (x > canvas.width - radius){
        x = canvas.width - radius;
    }
}

function checkPoint(){
    let dx = x - pointx;
    let dy = y - pointy;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let sumOfRadii = radius + rad;

    if(distance < sumOfRadii){
        score++;
        pointx = Math.random() * canvas.width;
        pointy = Math.random() * canvas.height;
    }
    
}

function updateScore(){
    ctx.font = "bold 25px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(" Score: " + score, 50, 50);
}

function point(){
    ct.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(pointx, pointy, rad, 0, Math.PI * 2);
    ctx.fill();
}

function inputs(){
    if (upPressed){
        y = y - speed;
    }
    if (downPressed){
        y = y + speed;
    }
    
    if (leftPressed){
        x = x - speed;
    }
    if (rightPressed){
        x = x + speed;
    }
}

function drawBomb(){
    setTimeout(drawBomb, 1000);
    ct.fillStyle = "red";
    ct.beginPath();
    ct.arc(Math.random() * canvas.width, Math.random() * canvas. height, 20, 0, Math.PI * 2);
    ct.fill();
}

//Draws the blob
function drawGreenBlob(){
    ctx.fillStyle = "green";
    if (upPressed){
        ctx.fillStyle = "pink";
    }
    if(downPressed){
        ctx.fillStyle = "blue";
    }
    if(rightPressed){
        ctx.fillStyle = "yellow";
    }
    if(leftPressed){
        ctx.fillStyle = "purple";
    }
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI * 2);
    ctx.fill();
}


//Clears the Screen
function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.clientWidth, canvas.height); 
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event){
    //down
    
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = true;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = true;
    }
    if(event.keyCode == 40){
        downPressed = true;
    }
}

function keyUp(event){
    
    if(event.keyCode == 38){
        upPressed = false;
    }
    if(event.keyCode == 37){
        leftPressed = false;
    }
    if(event.keyCode == 39){
        rightPressed = false;
    }
    if(event.keyCode == 40){
        downPressed = false;
    }
}

drawGame();
  


 
