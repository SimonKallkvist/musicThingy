// ---------> 

//global Declarations
let progressBar = document.getElementById('progressBar');
let song = document.getElementById('song');
let controlIcon = document.querySelector('#controlIcon');
let playPause = document.querySelector('#playPause');

console.log(controlIcon);
song.onloadedmetadata = function (){
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
}


playPause.addEventListener('click', () => {
    
    if(controlIcon.classList.contains('fa-pause')){
        song.pause();
        controlIcon.classList.remove('fa-pause');
        controlIcon.classList.add('fa-play');

    }else {
        song.play();
        controlIcon.classList.add('fa-pause');
        controlIcon.classList.remove('fa-play');
    }
});

if(song.play){
    setInterval(() => {
        progressBar.value = song.currentTime;
    },500);
}

progressBar.onchange = function(){
    song.play();
    song.currentTime = progressBar.value;
    controlIcon.classList.add('fa-pause');
    controlIcon.classList.remove('fa-play');
};