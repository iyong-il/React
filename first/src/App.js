// warning message 없애는 키워드
/* eslint-disable */

// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // 변수
  let number = 0;
  const [write, setWrite] = useState(["글 1", "플 2", "슬 3"]);
  const [num, setNum] = useState(0);

  // 메서드
  const add = () => {
    setNum(num + 1);
  };

  const minus = () => {
    setNum(num - 1);
  };

  const nameChange = () => {
    // ...은 참조를 뜻함
    // copy는 write의 주소를 가리키고 있다는 의미
    let copy = [...write];
    copy[0] = "여자코트 추천";
    setWrite(copy);
  };

  const sort = () => {
    let copy = [...write];
    copy.sort();
    setWrite(copy);
  };

  // html
  return (
    <div className="App">
      <div className="black-nav">
        <h1>연습용</h1>
      </div>
      <div className="list">
        <div onClick={nameChange}>🫶</div>
        <div onClick={sort}>😻</div>
        <h4>
          {write[0]} <span onClick={add}>👍</span>
          <span onClick={minus}>👎</span>
          {num}
        </h4>
        <p>1월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{write[1]}</h4>
        <p>1월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{write[2]}</h4>
        <p>1월 25일 발행</p>
      </div>
    </div>
  );
}

export default App;
