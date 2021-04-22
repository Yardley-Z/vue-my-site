import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      html: `<h1>spotlight</h1>`,
      style: `.spotLight-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #222222;
      }

      h1 {
        position: relative;
        text-transform: uppercase;
        color: #333333;
        font-size: 8rem;
      }

      h1::after {
        content: "spotlight";
        position: absolute;
        top: 0;
        left: 0;
        color: transparent;
        background-image: linear-gradient(
          to right,
          #c23616,
          #192a56,
          #00d2d3,
          yellow,
          #6d214f,
          #2e86de,
          #4cd137,
          #e84118
        );
        background-clip: text;
        -webkit-background-clip: text;
        /* 半径  圆心位置（左 ，上） */
        clip-path: circle(100px at 0% 50%);
        animation: move 5s infinite;
        /* animation: move 3s cubic-bezier(0.54, 0.01, 0.43, 0.97) infinite alternate; */
      }

      @keyframes move {
        0% {
          clip-path: circle(100px at 0% 50%);
        }

        50% {
          clip-path: circle(100px at 100% 50%);
        }

        100% {
          clip-path: circle(100px at 0% 50%);
        }
      }
      `
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "4",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});