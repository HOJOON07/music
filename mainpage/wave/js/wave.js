import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    console.log(stageWidth, stageHeight);

    this.centerX = stageWidth / 2; //중간을 각각 넓이, 높이를 2로 나눈 값으로 지정
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1); //각 점의 간격은 '전체넓이 / 전체 점의 숫자 -1' 이 됩니다.
    //이렇게 나누면 화면의 시작부터 끝까지 고른 간격으로 점을 찍을 수 있습니다.

    this.init(); //초기화 함수로 넘어가기
  }

  init() {
    //가운데 하나의 점 만드는 코드
    // this.point = new Point(this.centerX, this.centerY);

    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
    //points의 각각 인덱스를 넣어주고 인덱스 -> 점의 위치에 따라 파도 모양을 다르게 해주기 위해서
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY); //점의 시작점으로 붓을 옮겨주는거

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      // ctx.lineTo(cx, cy);
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);

    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();

    // this.point.update();

    // ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    // ctx.fill();
  }
}
