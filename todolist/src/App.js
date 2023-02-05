/* eslint-disable */

// styled-components를 사용하기 위해
// npm install @emotion/styled @emotion/react,
// 로 다운받아야 사용 가능하다.
import * as S from "./emotion";

// 기본 css
import "./App.css";

function App() {
  let todoData = [{ id: "1", title: "sss", isComplete: false }];
  return (
    <S.Container>
      <S.TodoBlock>
        <S.Title>
          <h1>할 일 목록</h1>
        </S.Title>
        {todoData.map((e) => (
          <S.List key={e.id}>
            <input type="checkbox" />
            {e.title}
            <S.DeleteButton>X</S.DeleteButton>
          </S.List>
        ))}
      </S.TodoBlock>
    </S.Container>
  );
}

export default App;
