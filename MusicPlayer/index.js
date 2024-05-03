import MusicData from "./Assests/MusicsFolder/music.js";
var current = 0;
console.log(MusicData);
const MusicList = document.querySelector(".second");
MusicData.forEach((item, index) => {
  console.log(item, index);
  let newchild = document.createElement("div");
  newchild.className = `${item.Name}${index}`;
  newchild.style.width = "100%";
  newchild.style.height = "70px";
  newchild.style.border = "2px solid black";
  newchild.style.textAlign = "center";
  newchild.style.display = "flex";
  newchild.style.justifyContent = "center";
  newchild.style.alignItems = "center";
  newchild.style.fontSize = "25px";
  newchild.style.fontWeight = "bold";
  newchild.innerText = item.Name;
  MusicList.appendChild(newchild);
});
const PlayPauseBtn = document.querySelector("#playpause");
const BackBtn = document.querySelector("#back");
const NextBtn = document.querySelector("#next");
const SongTitle = document.querySelector("#SongName");

let currentSong = MusicData[current].Music;
SongTitle.textContent = MusicData[current].Name;

PlayPauseBtn.addEventListener("click", () => {
  PlayPauseSongFun();
});

NextBtn.addEventListener("click", () => {
  updateSong('next');
  PlayPauseSongFun();
});

BackBtn.addEventListener("click", () => {
  updateSong('prev');
  PlayPauseSongFun();
});

const updateSong = (action) => {
  // console.log("he");
 console.log("Updating song", action);
  currentSong.pause();
  currentSong.currentTime = 0;
  if(action === 'next'){
    current++;
    if (current > MusicData.length-1) {
      current = 0;
    }
  }
  if(action === 'prev'){
    current--;
    if (current < 0) {
      current = MusicData.length-1;
    }
  }
  console.log("Current index:", current);
  currentSong = MusicData[current].Music;
  SongTitle.textContent = MusicData[current].Name;
  imgChangeFun();
};

const PlayPauseSongFun = () => {
    if (currentSong.paused) {
        currentSong.play();
        PlayPauseBtn.className = "ph-bold ph-pause";
    } else {
        currentSong.pause();
        PlayPauseBtn.className = "ph-bold ph-play";
    }
};
for (const Song of MusicData) {
    Song.Music.addEventListener("ended", () => {
        updateSong("next");
        PlayPauseSongFun();
        imgChangeFun();
  });
}
const img = document.querySelector("#imgchange");
function imgChangeFun(){
    let value = Math.floor(Math.random()*6);
    img.src = `Assests/MusicBackgroundPng/${value}.png`;

}