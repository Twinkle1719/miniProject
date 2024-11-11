let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log("game is started");
    started=true;
    levelup();
}
});
function gameFlash(btn){/*because flash happens so many times therefore we make function*/
    btn.classList.add("flash");/*we add flashclass in css therefore its need to add*/
    setTimeout(function(){/*so that flas stop after a sec*/
         btn.classList.remove("flash");},250);
    }
    function userFlash(btn){/*because flash happens so many times therefore we make function*/
        btn.classList.add("userflash");/*we add flashclass in css therefore its need to add*/
        setTimeout(function(){/*so that flas stop after a sec*/
             btn.classList.remove("userflash");},250);
        }
function levelup(){
    userseq=[];
   level++;
   h2.innerText=`Level  ${level}`;
   let randIdx=Math.floor(Math.random()*3);/*generating random index from above btns*/
   let randColor=btns[randIdx];/*selecting colr from that index */
   let randBtn=document.querySelector(`.${randColor}`);
   /*console.log(randBtn);
   console.log(randIdx);
   console.log(randColor);*/
   gameseq.push(randColor);
   console.log(gameseq);
   gameFlash(randBtn);
}  
function checkAns(idx){
    //console.log("curr level",level);
   // let idx = level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
           // levelup();
        }
        //console.log("same value");
    }else{
        //h2.innerText=`Game Over! Press any key to start.`;
        h2.innerHTML=`Game Over!<b>Your score was ${level}</b> Press any key to start.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";

        },150);
        reset();
    }
    }
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq =[];
    userseq=[];
    level=0;
}
//HW display highest score
