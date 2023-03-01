// 초기에는 1~5위까지 나오게
// 1. 인풋창에 밸류를 입력한다.
// 2. 조건은 밸류의 길이가 1 이상이면서 focus가 되었을때
// 3. json data 에서 (배열임) 인덱스를 돌면서 문자열을 검색하고 인풋에
// 입력된 밸류를 포함한 인덱스를 반환한다.
// 4.그거를 하이드 해놓은 div창에 넣는다.

// 레이아웃은 div 하나 넣어놓고
// 거기에 조건에 맞는 div 하나씩 넣어주면 되겠다
// 전체 Div크기를 정해주고 그담에 들어가는 div는 부모 가로값의 100퍼센트를 주고
// 클릭이벤트 줘서 모달창

const input = document.querySelector("searchInput");
// const chartData = require("../../../music-chart/item.json");
console.log(song_data);
