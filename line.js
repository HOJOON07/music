draw(ctx) {
  /*
  그리기의 경로를 시작하는 메소드
  https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes
  https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
  */
  ctx.beginPath();

  /* 점의 시작점으로 붓 이동하기 */
  ctx.moveTo(this.points[0].x, this.points[0].y);

  for (let i = 0; i < this.numberOfPoints; i++) {
    /* 
    호(arc)를 그리는 메소드를 이용하여 원을 그림 
    2 * Math.PI = 반지름 * 2 = 지름
    */
    // ctx.arc(this.points[i].x, this.points[i].y, 30, 0, 2 * Math.PI);

    /* 각 좌표에 선 긋기 */
    ctx.lineTo(this.points[i].x, this.points[i].y);

    /* 공의 위치 변경하기 */
    if (i != 0 && i != this.numberOfPoints - 1) {
      this.points[i].update();
    }
  }

  /* 색상 RED & 채우기 */
  ctx.fillStyle = '#ff0000';
  ctx.fill();

  /* 붓 끝내기 */
  ctx.closePath();
}