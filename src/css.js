const string=`
.skin* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .skin*::before,
  .skin*::after {
    box-sizing: border-box;
  }
  
  .skin {
    position: relative;
    background-color: #ffe600;
    height: 100vh;
  }
  .san {
    border: 10px solid red;
    border-color: black transparent blue transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 3;
  }
  .yuan {
    position: absolute;
    background-color: black;
    height: 6px;
    width: 20px;
    top: -16px;
    left: -10px;
    border-radius: 5px 5px 0 0;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .san:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
  }
  .eye {
    position: absolute;
    border: 2px solid black;
    width: 64px;
    height: 64px;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    border-radius: 50%;
    background-color: #2e2e2e;
  }
  .eye::before {
    content: "";
    display: block;
    background-color: white;
    width: 24px;
    height: 24px;
    border: 2px solid black;
    position: relative;
    top: 3px;
    left: 6px;
    border-radius: 50%;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    top: 180px;
    position: absolute;
    width: 200px;
    height: 150px;
    left: 50%;
    margin-left: -100px;
    background-color: #ffe600;
    z-index: 2;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 15px;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(-15deg);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 15px 0;
    border-top: transparent;
    border-left: transparent;
    left: 103px;
    transform: rotate(15deg);
  }
  .mouth .up .lip {
    border: 3px solid #2e2e2e;
    width: 100px;
    height: 22px;
    position: absolute;
    float: left;
    background-color: #ffe600;
    z-index: 3;
  }
  .mouth .up {
    z-index: 3;
    background-color: #ffe600;
  }
  .mouth .down {
    height: 180px;
    width: 100%;
    position: absolute;
    top: 8px;
    overflow: hidden;
    z-index: 2;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    position: absolute;
    height: 1000px;
    bottom: 0;
    width: 160px;
    border-radius: 100px/400px;
    left: 50%;
    margin-left: -80px;
    background-color: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    border: 3px solid black;
    position: absolute;
    background-color: #ff485f;
    width: 200px;
    height: 300px;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
`
export default string;