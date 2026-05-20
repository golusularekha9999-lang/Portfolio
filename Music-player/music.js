let audio=document.getElementById("song");
let playBtn=document.getElementById("playBtn");
let pauseBtn=document.getElementById("pauseBtn");
playBtn.addEventListener("click", function() {
    audio.play();
});
pauseBtn.addEventListener("click",function(){
    audio.pause();
});
let audio=document.getElementById("song");
let playBtn=document.getElementById("playBtn");
playBtn.onclick=function(){
    if(audio.paused){
      audio.play();
   playBtn.innerText="||";
    }
else{
    
    audio.pause();
        playBtn.innerText="▶";
}
};
