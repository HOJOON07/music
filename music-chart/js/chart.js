// MAIN 장르별 TOP 5
const rankDivEl = document.querySelectorAll(".text_div");
for (let i = 0; i < 5; i++) {
  const title_h2_i = document.createElement("h2");
  const artist_h3_i = document.createElement("h3");
  const album_img_i = document.createElement("img");
  rankDivEl[i].appendChild(title_h2_i);
  rankDivEl[i].appendChild(artist_h3_i);
  rankDivEl[i].appendChild(album_img_i);
  title_h2_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].song));
  artist_h3_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].singer));
  album_img_i.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[i].albumCover))
  );
}
for (let i = 5; i < 10; i++) {
  const title_h2_i = document.createElement("h2");
  const artist_h3_i = document.createElement("h3");
  const album_img_i = document.createElement("img");
  rankDivEl[i].appendChild(title_h2_i);
  rankDivEl[i].appendChild(artist_h3_i);
  rankDivEl[i].appendChild(album_img_i);
  title_h2_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].song));
  artist_h3_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].singer));
  album_img_i.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[i].albumCover))
  );
}

for (let i = 10; i < 15; i++) {
  const title_h2_i = document.createElement("h2");
  const artist_h3_i = document.createElement("h3");
  const album_img_i = document.createElement("img");
  rankDivEl[i].appendChild(title_h2_i);
  rankDivEl[i].appendChild(artist_h3_i);
  rankDivEl[i].appendChild(album_img_i);
  title_h2_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].song));
  artist_h3_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].singer));
  album_img_i.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[i].albumCover))
  );
}

for (let i = 15; i < 20; i++) {
  const title_h2_i = document.createElement("h2");
  const artist_h3_i = document.createElement("h3");
  const album_img_i = document.createElement("img");
  rankDivEl[i].appendChild(title_h2_i);
  rankDivEl[i].appendChild(artist_h3_i);
  rankDivEl[i].appendChild(album_img_i);
  title_h2_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].song));
  artist_h3_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].singer));
  album_img_i.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[i].albumCover))
  );
}

for (let i = 20; i < 25; i++) {
  const title_h2_i = document.createElement("h2");
  const artist_h3_i = document.createElement("h3");
  const album_img_i = document.createElement("img");
  rankDivEl[i].appendChild(title_h2_i);
  rankDivEl[i].appendChild(artist_h3_i);
  rankDivEl[i].appendChild(album_img_i);
  title_h2_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].song));
  artist_h3_i.innerHTML = JSON.parse(JSON.stringify(song_data[i].singer));
  album_img_i.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[i].albumCover))
  );
}

// TOP 50
const first_ul = document.querySelector(".first_list_ul"); // 5개
const second_ul = document.querySelector(".second_list_ul"); // 5개
const third_ul = document.querySelector(".third_list_ul"); // 5개
const fourth_ul = document.querySelector(".fourth_list_ul"); // 5개
const fifth_ul = document.querySelector(".fifth_list_ul"); // 5개
const sixth_ul = document.querySelector(".sixth_list_ul"); // 5개
const seventh_ul = document.querySelector(".seventh_list_ul"); // 5개
const eighth_ul = document.querySelector(".eighth_list_ul"); // 5개
const ninth_ul = document.querySelector(".ninth_list_ul"); // 5개
const tenth_ul = document.querySelector(".tenth_list_ul"); // 5개
// const listUlEl = document.querySelectorAll(".list_ul");

// for (let j = 0; j < 10; j++) {
//   // createElement
//   const liEl_j = document.createElement("li");
//   const albumDivEl_j = document.createElement("div");
//   const rankDivEl_j = document.createElement("div");
//   const songAreaDivEl_j = document.createElement("div");
//   const songDivEl_j = document.createElement("div");
//   const singerDivEl_j = document.createElement("div");
//   const titleSpanEl_j = document.createElement("span");
//   const artistSpanEl_j = document.createElement("span");
//   const imgTag = document.createElement("img");

//   listUlEl[j].appendChild(liEl_j);
//   liEl_j.setAttribute("class", `list_track_row`);
//   liEl_j.appendChild(albumDivEl_j);
//   liEl_j.appendChild(rankDivEl_j);
//   liEl_j.appendChild(songAreaDivEl_j);
//   albumDivEl_j.setAttribute("class", `album`);
//   rankDivEl_j.setAttribute("class", `rank`);
//   songAreaDivEl_j.setAttribute("class", `song_area`);
//   songAreaDivEl_j.appendChild(songDivEl_j);
//   songAreaDivEl_j.appendChild(singerDivEl_j);
//   songDivEl_j.setAttribute("class", `song`);
//   singerDivEl_j.setAttribute("class", `singer`);
//   songDivEl_j.appendChild(titleSpanEl_j);
//   singerDivEl_j.appendChild(artistSpanEl_j);
//   titleSpanEl_j.setAttribute("class", `title`);
//   artistSpanEl_j.setAttribute("class", `artist`);
//   albumDivEl_j.appendChild(imgTag);

//   // 추가
//   imgTag.setAttribute(
//     "src",
//     JSON.parse(JSON.stringify(song_data[j].albumCover))
//   );
//   rankDivEl_j.innerHTML = j + 1;
//   titleSpanEl_j.innerHTML = JSON.parse(JSON.stringify(song_data[j].song));
//   artistSpanEl_j.innerHTML = JSON.parse(JSON.stringify(song_data[j].singer));
// }

for (let k = 0; k < 5; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  first_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 5; k < 10; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  second_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 10; k < 15; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  third_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 15; k < 20; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  fourth_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 20; k < 25; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  fifth_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 25; k < 30; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  sixth_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 30; k < 35; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  seventh_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}
for (let k = 35; k < 40; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  eighth_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}
for (let k = 40; k < 45; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  ninth_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

for (let k = 45; k < 50; k++) {
  // createElement
  const li_k = document.createElement("li");
  const album_div_k = document.createElement("div");
  const rank_div_k = document.createElement("div");
  const song_area_div_k = document.createElement("div");
  const song_div_k = document.createElement("div");
  const singer_div_k = document.createElement("div");
  const title_span_k = document.createElement("span");
  const artist_span_k = document.createElement("span");
  const imgTag = document.createElement("img");

  tenth_ul.appendChild(li_k);
  li_k.setAttribute("class", `list_track_row`);
  li_k.appendChild(album_div_k);
  li_k.appendChild(rank_div_k);
  li_k.appendChild(song_area_div_k);
  album_div_k.setAttribute("class", `album`);
  rank_div_k.setAttribute("class", `rank`);
  song_area_div_k.setAttribute("class", `song_area`);
  song_area_div_k.appendChild(song_div_k);
  song_area_div_k.appendChild(singer_div_k);
  song_div_k.setAttribute("class", `song`);
  singer_div_k.setAttribute("class", `singer`);
  song_div_k.appendChild(title_span_k);
  singer_div_k.appendChild(artist_span_k);
  title_span_k.setAttribute("class", `title`);
  artist_span_k.setAttribute("class", `artist`);
  album_div_k.appendChild(imgTag);

  // 추가
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  rank_div_k.innerHTML = k + 1;
  title_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));
  artist_span_k.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));
}

// SWIPER
// SWIPER CHART
const swiperNotice = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// 버튼 색 유지
const buttonEl = document.querySelectorAll("button");

function handleClick(event) {
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let r = 0; r < buttonEl.length; r++) {
      buttonEl[r].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
}
function init() {
  for (let r = 0; r < buttonEl.length; r++) {
    buttonEl[r].addEventListener("click", handleClick);
  }
}
init();

// 날짜
const now = new Date(); /*현재 Date 객체 생성*/
const today = {
  year: now.getFullYear() /*년,일, 월,요일 가져오기*/,
  date: now.getDate(),
  month: now.toLocaleDateString("en-US", {
    month: "short",
  }) /*월은 문자열로 가져오기*/,
  day: now.toLocaleDateString("en-US", {
    weekday: "short",
  }) /*요일 문자열로 가져오기*/,
};

/*현재에 해당하는 년,월,일,요일을 반복출력*/
for (let key in today) {
  document.getElementById(key).textContent = today[key];
}
