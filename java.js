let songIndex = 0;

let songs = [
 {songName: "Ishq Wala Love", filePath: "audio/ishq wala love.mpeg"},
 {songName: "Kabhi Kabhi Aditi", filePath: "audio/kabhi kabhi aditi.mpeg"},
 {songName: "Ride It", filePath: "audio/ride it.mpeg"},
 {songName: "Samjhava", filePath: "audio/samjhava.mpeg"},
 {songName: "Tum Mile", filePath: "audio/tum mile.mpeg"},
 {songName: "Tum Se Hi", filePath: "audio/tum se hi.mpeg"}
];

let audioElement = new Audio(songs[0].filePath);

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

function makeAllPlays(){
    songItemPlay.forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

document.getElementById('next').addEventListener('click', ()=>{

    songIndex++;

    if(songIndex >= songs.length){
        songIndex = 0;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    makeAllPlays();

    songItemPlay[songIndex].classList.remove("fa-circle-play");
    songItemPlay[songIndex].classList.add("fa-circle-pause");

});

document.getElementById('previous').addEventListener('click', ()=>{

    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    makeAllPlays();

    songItemPlay[songIndex].classList.remove("fa-circle-play");
    songItemPlay[songIndex].classList.add("fa-circle-pause");

});

songItemPlay.forEach((element, i)=>{

element.addEventListener('click', ()=>{

    if(songIndex === i && !audioElement.paused){

        audioElement.pause();
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    }

    else{

        makeAllPlays();

        songIndex = i;

        audioElement.src = songs[i].filePath;
        audioElement.currentTime = 0;

        audioElement.play();

        element.classList.remove("fa-circle-play");
        element.classList.add("fa-circle-pause");

        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

        gif.style.opacity = 1;

    }

});

});


// master play
masterPlay.addEventListener('click', ()=>{

if(audioElement.paused){

    audioElement.play();

    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    gif.style.opacity = 1;

}

else{

    audioElement.pause();

    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");

    gif.style.opacity = 0;

}

});


// progress bar
audioElement.addEventListener('timeupdate', ()=>{

let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

myProgressBar.value = progress;

});


// progress change
myProgressBar.addEventListener('change', ()=>{

audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

});



ScrollReveal().reveal('.about p', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
});
