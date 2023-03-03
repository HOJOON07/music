const data = song_data; //멜론차트 데이터
// console.log(data);
const rank = document.querySelectorAll(".rank");
const rankImg = document.querySelectorAll(".rankImg");
const rankNumber = document.querySelectorAll(".rankNumber");
const musicName = document.querySelectorAll(".musicName");
const artistName = document.querySelectorAll(".artistName");
const albumName = document.querySelectorAll(".albumName");
const searchResult = document.querySelector(".searchResult");
//모달

// const modal = document.getElementById("modal");

for (let i = 0; i < rank.length; i++) {
  rank[i].setAttribute("id", data[i].id);
  rankImg[i].setAttribute("src", data[i].albumCover);
  rankNumber[i].innerHTML = i + 1;
  musicName[i].innerHTML = data[i].song;
  artistName[i].innerHTML = data[i].singer;
}
const arr = [];
for (let i = 0; i < data.length; i++) {
  const obj = {
    singer: data[i].singer.toUpperCase(),
    song: data[i].song.toUpperCase(),
    id: data[i].id,
  };
  arr.push(obj);
}

const input = document.querySelector(".searchInput");
const music = document.querySelector(".music");
const singer = document.querySelector(".singer");
const musicNoResult = document.querySelector(".musicNoResult");
const singerNoResult = document.querySelector(".singerNoResult");

input.addEventListener("keyup", function (e) {
  const upValue = input.value.toUpperCase();
  //대소문자 구분없는 데이터
  const upSearchData = arr.filter((el) => el.song.search(upValue) !== -1);
  const idArr = [];

  upSearchData.forEach((el) => {
    idArr.push(el.id);
  });

  let searchData = [];
  for (let i = 0; i < song_data.length; i++) {
    for (let j = 0; j < idArr.length; j++) {
      if (song_data[i].id == idArr[j]) {
        searchData.push(song_data[i]);
      }
    }
  }

  if (searchData.length === 0) music.innerHTML = "곡 검색 결과가 없습니다.";

  // for 문의 if 문
  for (let i = 0; i < searchData.length; i++) {
    if (i === 0) music.innerHTML = "";
    //1
    const musicResultWrap = document.createElement("div");
    musicResultWrap.classList.add("musicResultWrap");
    musicResultWrap.setAttribute("id", searchData[i].id);
    //2
    const resultAlbumCover = document.createElement("div");
    resultAlbumCover.classList.add("resultAlbumCover");
    //3
    const resultAlbumImg = document.createElement("img");
    resultAlbumImg.classList.add("resultAlbumImg");
    resultAlbumImg.setAttribute("src", searchData[i].albumCover);
    resultAlbumCover.append(resultAlbumImg);
    //4
    const resultMusicName = document.createElement("p");
    resultMusicName.classList.add("resultMusicName");
    resultMusicName.textContent = searchData[i].song;
    //5
    const resultArtistName = document.createElement("p");
    resultArtistName.classList.add("resultArtistName");
    resultArtistName.textContent = searchData[i].singer;

    console.log(musicResultWrap);

    musicResultWrap.append(resultAlbumCover);
    musicResultWrap.append(resultMusicName);
    musicResultWrap.append(resultArtistName);

    // musicResultWrap.addEventListener("click", function () {
    //   modal.style.display = "flex";
    //   searchResult.classList.remove("show");
    //   console.log(musicResultWrap);
    // });
    music.append(musicResultWrap);
  }
});

window.addEventListener("click", (e) => {
  console.log("!!!!", e.target);
});

input.addEventListener("keyup", function (e) {
  if (e.target.value.length === 0) {
    music.classList.add("hide");
  } else {
    music.classList.remove("hide");
  }
});
input.addEventListener("keyup", function (e) {
  if (e.target.value.length > 0) {
    for (let i = 0; i < rank.length; i++) {
      rank[i].classList.add("hide");
    }
  } else {
    for (let i = 0; i < rank.length; i++) {
      rank[i].classList.remove("hide");
    }
  }
});

input.addEventListener("keyup", function (e) {
  const upValue = input.value.toUpperCase();
  //대소문자 구분없는 데이터
  const upSearchData = arr.filter((el) => el.singer.search(upValue) !== -1);
  const idArr = [];
  upSearchData.forEach((el) => {
    idArr.push(el.id);
  });

  const searchData = [];
  for (let i = 0; i < song_data.length; i++) {
    for (let j = 0; j < idArr.length; j++) {
      if (song_data[i].id == idArr[j]) {
        searchData.push(song_data[i]);
      }
    }
  }
  // console.log(searchData);

  if (searchData.length === 0) singer.innerHTML = "가수 검색 결과가 없습니다.";
  // if (searchData.length === 0) singer.innerHTML = "";
  // if (searchData.length === 0) searchResult.remove();
  // if (searchData.length === 0) {
  //   singerNoResult.classList.add(show);
  // } else {
  //   singerNoResult.classList.remove(show);
  // }

  // for 문의 if 문
  for (let i = 0; i < searchData.length; i++) {
    if (i === 0) singer.innerHTML = "";
    //1
    const singerResultWrap = document.createElement("div");
    singerResultWrap.classList.add("singerResultWrap");
    singerResultWrap.setAttribute("id", searchData[i].id);
    //2
    const resultSingerAlbumCover = document.createElement("div");
    resultSingerAlbumCover.classList.add("resultSingerAlbumCover");
    //3
    const resultSingerAlbumImg = document.createElement("img");
    resultSingerAlbumImg.classList.add("resultSingerAlbumImg");
    resultSingerAlbumImg.setAttribute("src", searchData[i].albumCover);
    resultSingerAlbumCover.append(resultSingerAlbumImg);
    //4
    const resultSingerMusicName = document.createElement("p");
    resultSingerMusicName.classList.add("resultSingerMusicName");
    resultSingerMusicName.textContent = searchData[i].song;
    //5
    const resultSingerArtistName = document.createElement("p");
    resultSingerArtistName.classList.add("resultSingerArtistName");
    resultSingerArtistName.textContent = searchData[i].singer;

    singerResultWrap.append(resultSingerAlbumCover);
    singerResultWrap.append(resultSingerMusicName);
    singerResultWrap.append(resultSingerArtistName);
    singer.append(singerResultWrap);
  }
  // if (searchData.length === 0) artistResultWrap.innerHTML = "";

  if (input.value === "") {
    music.innerHTML = "";
    singer.innerHTML = "";
  }
});

input.addEventListener("focus", function () {
  searchResult.classList.add("show");
});
music.addEventListener("click", function () {
  searchResult.classList.add("show");
});

input.addEventListener("blur", function () {
  searchResult.classList.remove("show");
});
