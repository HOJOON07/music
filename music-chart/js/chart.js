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
// // 1~10위
// for (let k = 0; k < 10; k++) {
//   div_k = document.createElement("div");
//   first_div.appendChild(div_k);
//   div_k.setAttribute("class", "chart_div");

//   for (let j = 0; j < 5; j++) {
//     div_j = document.createElement("div");
//     div_k.appendChild(div_j);

//     imgTag = document.createElement("img");
//   }
//   // 순위 숫자 넣기 1~10
//   const div_first = div_k.querySelector(
//     ".chart-block_1>div>div:nth-child(5n + 1)"
//   );
//   div_first.innerHTML = k + 1;

//   // 앨범 커버
//   const div_second = div_k.querySelector(
//     ".chart-block_1>div>div:nth-child(5n + 2)"
//   );
//   div_second.appendChild(imgTag);
//   imgTag.setAttribute(
//     "src",
//     JSON.parse(JSON.stringify(song_data[k].albumCover))
//   );

//   // 노래 제목
//   const div_third = div_k.querySelector(
//     ".chart-block_1>div>div:nth-child(5n + 3)"
//   );
//   div_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

//   // 가수
//   const div_fourth = div_k.querySelector(
//     ".chart-block_1>div>div:nth-child(5n + 4)"
//   );
//   div_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

//   // 앨범명
//   const div_fifth = div_k.querySelector(
//     ".chart-block_1>div>div:nth-child(5n + 5)"
//   );
//   div_fifth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));
// }

// SWIPER
// SWIPER CHART
const swiperNotice = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});
