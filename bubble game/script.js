const timer = document.getElementById("timer");
const hit = document.getElementById("hit");
const scoreText = document.getElementById("score");
const pbtm = document.getElementById("pbtm");
let time = 60;
let score = 0;
let hitRn;

makeBubble();
runTimer();
getNewHit();

function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    hit.textContent = hitRn;
}

function makeBubble() {
    var bubble = "";

    for (var i = 1; i <= 156; i++) {
        bubble += `<div id="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    document.querySelector("#pbtm").innerHTML = bubble;
}


function runTimer() {
     let timerstop = setInterval(function () {
        if (time > 0) {
            time--;
            timer.textContent = time;
        }
        else{
            clearInterval(timerstop);
            pbtm.style.fontSize = 80
            pbtm.innerHTML = `<h1>GAME OVER</H1>`;

        }
    }, 1000);

}

function increaseScore(){
    score += 10;
    scoreText.textContent = score;
}

pbtm,addEventListener("click",(details)=>{
    let clickedNum = Number(details.target.textContent);
    if(clickedNum == hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})



