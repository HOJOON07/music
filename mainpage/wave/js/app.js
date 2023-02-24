import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas"); //캔버스 요소를 만듬
    this.ctx = this.canvas.getContext("2d");
    //getContext("2d") 호출로 CanvasRenderingContext2D 타입의 객체가 리턴되는데 이 객체가 바로 그리기 메서드와 속성을 가지는 컨텍스트이다.
    //컨텍스트를 ctx 변수에 대입하고 이후부터 ctx의 메서드로 그리기를 수행한다. 예제에서는 strokeRect 메서드로 사각형을 그렸다. 캔버스 안쪽에 회색 사각형이 출력된다.

    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize(); // 초기 사이즈를 기준으로 함수 실행

    requestAnimationFrame(this.animate.bind(this));
    //JS에서 부드러운 애니메이션을 만들기 위해서 사용되는 함수 (초당 60프레임으로 제한이 가능함 )
    //setTimeOut,setIntervalr은 스택에 무제한으로 쌓이기 때문에 안좋다 .
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
