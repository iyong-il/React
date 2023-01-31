/* eslint-disable */

// import logo from "./logo.svg";
import "./App.css";

function App() {
  let todoData = [{ id: "1", title: "sss", isComplete: false }];
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((e) => (
          <div className="list" key={e.id}>
            <input type="checkbox" />
            {e.title}
            <button className="deleteButton">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
