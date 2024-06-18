import { useState } from "react";
import "styles/App.scss";

const App = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const changeId = e => {
    setInputId(e.target.value);
  };

  const changePw = e => {
    setInputPw(e.target.value);
  };

  const login = () => {
    console.table({ id: inputId, pw: inputPw });
  };

  return (
    <main className="container">
      <div className="login-Container">
        <input
          type="text"
          placeholder="휴대폰 번호를 입력해주세요."
          onChange={changeId}
        />
        <input
          type="text"
          placeholder="비밀번호를 입력해주세요."
          onChange={changePw}
        />
        <button className="submit-button" onClick={login}>
          로그인
        </button>
      </div>
    </main>
  );
};

export default App;
