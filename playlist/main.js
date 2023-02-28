//player
let allMusic = [
  {
      name : "name1",
      artist : "artist1",
      img : "art1",
      audio : "name1"
  },
  {
      name : "name2",
      artist : "artist2",
      img : "art2",
      audio : "name2"
  },
  {
      name : "name3",
      artist : "artist3",
      img : "art3",
      audio : "name3"
  },
  {
      name : "name4",
      artist : "artist4",
      img : "art4",
      audio : "name4"
  },
  {
      name : "name5",
      artist : "artist5",
      img : "art5",
      audio : "name5"
  },
  {
      name : "name6",
      artist : "artist6",
      img : "art6",
      audio : "name6"
  },
  {
      name : "name7",
      artist : "artist7",
      img : "art7",
      audio : "name7"
  },
  {
      name : "name8",
      artist : "artist8",
      img : "art8",
      audio : "name8"
  },
  {
    name : "name9",
    artist : "artist9",
    img : "art9",
    audio : "name9"
 },
 {
    name : "name10",
    artist : "artist10",
    img : "art10",
    audio : "name10"
 },
 {
    name : "name11",
    artist : "artist11",
    img : "art11",
    audio : "name11"
 },
]

const musicWrap = document.querySelector(".wrap__music");
const musicImg = musicWrap.querySelector(".music__img img");
const musicName = musicWrap.querySelector(".music__song .name");
const musicArtist = musicWrap.querySelector(".music__song .artist");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".music__progress");
const musicProgressBar = musicProgress.querySelector(".bar");
const musicProgressCurrent = musicProgress.querySelector(".current");
const musicProgressDuration = musicProgress.querySelector(".duration");
const musicRepeat = musicWrap.querySelector("#control-repeat");
const musicList = document.querySelector(".music__list");
const musicListUl = musicList.querySelector(".list ul");
const MusicListBtn = musicWrap.querySelector("#control-list"); 
const lp = document.querySelector("figure section article .inner .lp");
const turntable = document.querySelector("figure section article .inner .turntable");
let musicIndex = 1;


// 음악 재생
function loadMusic(num){
    musicName.innerText = allMusic[num - 1].name;
    musicArtist.innerText = allMusic[num - 1].artist;
    musicAudio.src = `./songs/${allMusic[num - 1].audio}.mp3`;
}

// 플레이 버튼
function playMusic(){
    musicWrap.classList.add("paused");
    musicPlay.innerText = "pause";
    musicPlay.setAttribute("title", "일시정지")
    musicAudio.play();
    console.log("왔니?")
}

// 일시정지 버튼
function pauseMusic(){
    musicWrap.classList.remove("paused");
    musicPlay.innerText = "play_arrow";
    musicPlay.setAttribute("title", "재생")
    musicAudio.pause();
}

// 재생/일시정지
musicPlay.addEventListener("click", ()=>{
    const isMusicPaused = musicWrap.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
    
    if(!lp.classList.contains("lp-on")){
        lp.classList.remove("lp-off");
        lp.classList.add("lp-on");
    }
    else{
        lp.classList.remove("lp-on");
        lp.classList.add("lp-off");
    }
    
    if(!turntable.classList.contains("turntable-on")){
        turntable.classList.remove("turntable-off");
        turntable.classList.add("turntable-on");
    }
    else{
        turntable.classList.remove("turntable-on");
        turntable.classList.add("turntable-off");
    }
})

// 이전 곡 듣기 버튼
let num = 0;
let active = 0;

function prevMusic(){
  musicIndex--; 
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  lp.classList.remove("lp-off");
  lp.classList.add("lp-on");
  playMusic();
  playListMusic();
}

// 다음 곡 듣기 버튼
function nextMusic(){
  musicIndex++;
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  lp.classList.remove("lp-off");
  lp.classList.add("lp-on");
  playListMusic();
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime/duration) * 100;
    musicProgressBar.style.width = `${progressWidth}%`

    musicAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;

        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    })

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
})

const musicAlbumUl = document.querySelector(".inner ul");
const musicAlbumLi = document.querySelector(".inner ul li");
let art_li;

//앨범아트 이미지 넣기

for(let k = 0; k<allMusic.length; k++){
     art_li = `
    <li data-index="${k + 1}">
        <div>
            <img src="./img/${allMusic[k].img}.jpg" alt="album_art" class="${allMusic[k].img}">
        </div>
    </li>
    `;
    musicAlbumUl.insertAdjacentHTML("beforeend", art_li);
}

// 진행 버튼
musicProgress.addEventListener("click", e=>{
    let progressWidth = musicProgress.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = musicAudio.duration;
    console.log("왔니?")
    
    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
    
})


//전
musicPrevBtn.addEventListener("click", function(){
  prevMusic();
  MusicListBtn.classList.remove("fa-solid"); 
  MusicListBtn.classList.add("fa-regular");

  if(!musicAlbumLi.classList.contains("artOn")){
    musicAlbumLi.classList.remove("artOff");
    musicAlbumLi.classList.add("artOn");
  }else{
    musicAlbumLi.classList.remove("artOn");
    musicAlbumLi.classList.add("artOff");
  }
});


//후
musicNextBtn.addEventListener("click", ()=>{
    nextMusic();
    MusicListBtn.classList.remove("fa-solid");
    MusicListBtn.classList.add("fa-regular");
    
  if(!musicAlbumLi.classList.contains("artOn")){
    musicAlbumLi.classList.remove("artOff");
    musicAlbumLi.classList.add("artOn");
  }else{
    musicAlbumLi.classList.remove("artOn");
    musicAlbumLi.classList.add("artOff");
  }

  
});

// 반복 버튼
musicRepeat.addEventListener("click", ()=>{
    let getText = musicRepeat.innerText;

    switch(getText){
        case "repeat" :
            musicRepeat.innerText = "repeat_one";
            musicRepeat.setAttribute("title", "한곡 반복")
        break;

        case "repeat_one" : 
            musicRepeat.innerText = "shuffle";
            musicRepeat.setAttribute("title", "랜덤 반복")
        break;

        case "shuffle" : 
            musicRepeat.innerText = "repeat";
            musicRepeat.setAttribute("title", "전체 반복")
            playListMusic();
        break;
    }
})

// 오디오가 끝나고 
musicAudio.addEventListener("ended", ()=>{
    let getText = musicRepeat.innerText;

    switch(getText){
        case "repeat" :
            nextMusic();
        break;

        case "repeat_one" : 
            loadMusic(musicIndex);
            playMusic();
        break;

        case "shuffle" : 
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
        break;
    }
})

// 뮤직 리스트 구현하기
for(let i=0; i<allMusic.length; i++){
    let li = `
        <li data-index="${i + 1}" class="songNum${i}">
            <div>
                <em>${allMusic[i].name}</em>
                <p>${allMusic[i].artist}</p>
            </div>
            <audio class="${allMusic[i].audio}" src="./songs/${allMusic[i].audio}.mp3"></audio>
            <span id="${allMusic[i].audio}" class="audio-duration">3:36</span>
        </li>
    `;
    musicListUl.insertAdjacentHTML("beforeend", li);

    let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`);
    let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`);
    
    liAudio.addEventListener("loadeddata", () => {
        let audioDuration = liAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;

        liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        liAudioDuration.setAttribute("data-duration", `${totalMin}:${totalSec}`);
    });
}

// 뮤직 리스트 클릭하기
const musicListAll = musicListUl.querySelectorAll("li");

function playListMusic(){
    for(let j=0; j<musicListAll.length; j++){
        let audioTag = musicListAll[j].querySelector(".audio-duration");
        let adDuration = audioTag.getAttribute("data-duration");

        if(musicListAll[j].classList.contains("playing")){
            musicListAll[j].classList.remove("playing");
            audioTag.innerText = adDuration;
        }

        if(musicListAll[j].getAttribute("data-index") == musicIndex){
            musicListAll[j].classList.add("playing");
            audioTag.innerText = "재생중";
        }
        musicListAll[j].setAttribute("onclick", "clicked(this)");
    }
    if(!turntable.classList.contains("turntable-on")){
        turntable.classList.remove("turntable-off");
        turntable.classList.add("turntable-on");
    }
}

function clicked(el){
    let getLiIndex = el.getAttribute("data-index");
    
    lp.classList.remove("lp-off");
    lp.classList.add("lp-on");

    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playListMusic();

    //el 인덱스
     console.log(getLiIndex)
   
    const innerArt = document.querySelector("figure section article .inner")
    const albumArtNum = innerArt.querySelectorAll("ul>li");
    console.log(albumArtNum)
    albumArtNum[0].classList.add("album_on")

   
    for(let i=1; i<12; i++){
        albumArtNum[getLiIndex - 1].classList.add("album_on");
        if((i-1) !== (getLiIndex-1)){
            albumArtNum[i-1].classList.remove("album_on")
        }
    }

} 

// 창이 열리면 노래 시작
window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playListMusic();
    
if(turntable.classList.contains("turntable-on")){
    turntable.classList.remove("turntable-on");
    turntable.classList.add("turntable-off");
}
});

//💜
MusicListBtn.addEventListener("click", function(){
    if(MusicListBtn.classList.contains("fa-regular")){
        MusicListBtn.classList.remove("fa-regular");
        MusicListBtn.classList.add("fa-solid")
    }
    else{
        MusicListBtn.classList.remove("fa-solid");
        MusicListBtn.classList.add("fa-regular");
    }
})


