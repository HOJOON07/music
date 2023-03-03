const client = require("cheerio-httpcli");
const jsdom = require("jsdom");
const { join } = require("path");
const { JSDOM } = jsdom;
const fs = require("fs");
const { contains } = require("cheerio");
const arr = [];

// TOP 100
client.fetch("http://www.melon.com/chart/", {}, (err, $, res, body) => {
  let chartHtml = $.html(); // 크롤링해온 url의 html (멜론차트 페이지의 html)
  let dom = new JSDOM(chartHtml);
  let cover = dom.window.document.querySelectorAll(".wrap .image_typeAll img"); // 앨범 이미지
  let title = dom.window.document.querySelectorAll(
    ".ellipsis.rank01 > span > a"
  ); // 노래 제목
  let record = dom.window.document.querySelectorAll(".ellipsis.rank03 > a"); // 앨범
  // 가수를 각각 a 태그에서 받아 오는 것이 아니라, 전체 태그를 가져와서 작업
  // --> 이렇게 하면 가수가 2명이어도 하나의 배열에 데이터가 들어가서 문제 해결 가능
  let artistPart = dom.window.document.querySelectorAll(".ellipsis.rank02"); // 가수

  // let likeBtn = dom.window.document.querySelectorAll(".button_etc.like.cnt"); // 좋아요
  // // 좋아요 수
  // let test = likeBtn[0].textContent;
  // console.log(test.split("\n").join(""));
  // 0으로 출력됨

  // 가수를 따로 뽑는 코드
  for (let i = 0; i < artistPart.length; i++) {
    // 가수 파트에서 a 태그 전체를 뽑아서 가져오기
    const singerList = artistPart.item(i).querySelectorAll("a");

    //console.log(albumCover);
    let singerArr = [];
    let singer = "";

    // 가수가 2번 반복 되므로, 2명 이상의 가수인 경우에는 length 가 4 이상
    if (singerList.length >= 4) {
      const albumCover = cover[i].src;
      // 4 이상인 경우에는 가수 이름을 배열에 푸쉬! 단, 2번 반복 되므로 반복 수는 n / 2
      for (let i = 0; i < singerList.length / 2; i++) {
        singerArr.push(singerList.item(i).innerHTML);
      }
      // 배열을 , 로 구분해서 문자열로 합치기
      singer = singerArr.join(", ");
    } else {
      // 가수가 1명이면 바로 가수에 추가
      singer = singerList.item(0).innerHTML;
    }
    const albumCover = cover[i].src;
    const song = title.item(i)?.innerHTML;
    const album = record.item(i)?.innerHTML;
    const obj = {
      albumCover: albumCover,
      singer: singer,
      song: song,
      album: album,
      id: i,
    };
    arr.push(obj);
  }
  const json = JSON.stringify(arr);
  const jsonWithVar = "song_data = " + json;
  fs.writeFileSync("item.json", jsonWithVar);
});
