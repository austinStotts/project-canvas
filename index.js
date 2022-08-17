const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let draw = (x, y, o) => {
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x, y, 4, 4);
    if(o=="up") {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 4, 2);
    } else if(o=="left") {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 2, 4);
    } else if(o=="right") {
        ctx.fillStyle = 'black';
        ctx.fillRect(x+2, y, 2, 4);
    } else if (o=="down") {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y+2, 4, 2);
    }
}

var x = canvas.width/2;
var y = canvas.height/2;
draw(x,y);
let running = true;



const move = (e) => {
    console.log("x:", x, "y:", y);
    switch(e.keyCode) {
        case 37:
            // left key pressed
            x = x-2;
            if(x<=0) x=512;
            draw(x, y, "left");
            break;
        case 38:
            // up key pressed
            y = y-2;
            if(y<=0) y=512;
            draw(x, y, "up");
            break;
        case 39:
            // right key pressed
            x = x+2;
            if(x>=512) x=2;
            draw(x, y, "right");
            break;
        case 40:
            // down key pressed
            y = y+2;
            if(y>=512) y=0;
            draw(x, y, "down");
            break;  
    }   
}       

const keyDown = (e) => {
    console.log("KEY DOWN");
}

document.onkeydown = keyDown;

window.addEventListener("keydown", move, false);