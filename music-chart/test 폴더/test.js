const first_tbody = document.querySelector(".tbody_1");
const second_tbody = document.querySelector(".tbody_2");
const third_tbody = document.querySelector(".tbody_3");
const fourth_tbody = document.querySelector(".tbody_4");
const fifth_tbody = document.querySelector(".tbody_5");
const sixth_tbody = document.querySelector(".tbody_6");
const seventh_tbody = document.querySelector(".tbody_7");
const eighth_tbody = document.querySelector(".tbody_8");
const ninth_tbody = document.querySelector(".tbody_9");
const tenth_tbody = document.querySelector(".tbody_10");

let tr_k;
let td_j;
let imgTag;
let divTag;

// 1~10위
for (let k = 0; k < 10; k++) {
  tr_k = document.createElement("tr");
  first_tbody.appendChild(tr_k);

  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");

    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 1~10
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 11~20위
for (let k = 10; k < 20; k++) {
  tr_k = document.createElement("tr");
  second_tbody.appendChild(tr_k);

  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 21~30위
for (let k = 20; k < 30; k++) {
  tr_k = document.createElement("tr");
  third_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 21~30
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 31~40위
for (let k = 30; k < 40; k++) {
  tr_k = document.createElement("tr");
  fourth_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 41~50위
for (let k = 40; k < 50; k++) {
  tr_k = document.createElement("tr");
  fifth_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 51~60위
for (let k = 50; k < 60; k++) {
  tr_k = document.createElement("tr");
  sixth_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 61~70위
for (let k = 60; k < 70; k++) {
  tr_k = document.createElement("tr");
  seventh_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 71~80위
for (let k = 70; k < 80; k++) {
  tr_k = document.createElement("tr");
  eighth_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 81~90위
for (let k = 80; k < 90; k++) {
  tr_k = document.createElement("tr");
  ninth_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// 91~100위
for (let k = 90; k < 100; k++) {
  tr_k = document.createElement("tr");
  tenth_tbody.appendChild(tr_k);
  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");
    imgTag = document.createElement("img");
  }
  // 순위 숫자 넣기 11~20
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
}

// SWIPER
const swiperChart = new Swiper(".swiper", {
  direction: "horizontal",

  slidesPerView: 3,
  centeredSlides: true,
  loop: true, // 무한으로 돌기
  touchRatio: 0, // 터치해서 강제로 움직이지 않게
  speed: 1000,

  autoplay: {
    delay: 6000, // 4초
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

// MUSIC CHART FONT
var span = document.querySelector("span");

span.addEventListener("input", function () {
  var text = this.innerText;
  this.setAttribute("data-heading", text);
  this.parentElement.setAttribute("data-heading", text);
});

// TOGGLE CHART
const chartSection = document.querySelector(".music_chart");
const chartToggleBtn = document.querySelector(".toggle-chart");
chartToggleBtn.addEventListener("click", function () {
  console.log("!");
  if (chartSection.classList.contains("hide")) {
    chartSection.classList.remove("hide");
    // promotionToggleBtn.classList.add("show");
  } else {
    chartSection.classList.add("hide");
    // promotionToggleBtn.classList.remove("show");
  }
});
