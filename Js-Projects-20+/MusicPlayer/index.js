import tracks from "./sounds/sound.js";
console.log(tracks);
const SongTitle = document.querySelector(".SongName");
const PlayPausebtn = document.querySelector("#play-pause");
const Nextbtn = document.querySelector(".next");
const Backbtn = document.querySelector(".back");

let current = 0;
let currentSong = tracks[current].Song;
SongTitle.textContent = tracks[current].id;

PlayPausebtn.addEventListener('click',()=>{
    playPauseSong();
});
Nextbtn.addEventListener('click',()=>{
    updateSong('next');
    playPauseSong();
});
Backbtn.addEventListener('click',()=>{
    updateSong('back');
    playPauseSong();
});

const updateSong = (action)=>{
    currentSong.pause();
    currentSong.currentTime = 0;
    if(action === 'next'){
        current++;
        if(current > tracks.length-1){
            current = 0;
        }
    }
    if(action === 'back'){
        current--;
        if(current < 0){
            current = tracks.length-1;
        }
    }
    currentSong = tracks[current].Song;
    SongTitle.textContent = tracks[current].id;
};
const playPauseSong = ()=>{
    if(currentSong.paused){
        currentSong.play();
        PlayPausebtn.className ="ph-bold ph-pause";
    }else{
        currentSong.pause();
        PlayPausebtn.className ="ph-bold ph-play";
    }
};
for(const song of tracks){
    song.Song.addEventListener('ended',()=>{
        updateSong('next');
        playPauseSong();
    });
}
