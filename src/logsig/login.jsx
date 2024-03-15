import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login () {

    // firebase 사용
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [err, setErr] = useState("");

    const onChange = (e) => {
        const {name, value} = e.target;
        if(name === "email") setEmail(value);
        else if(name === "pw") setPw(value);
    }

    const onSubmit = async (e) => {
        e.preventDefalut();
        let sign;
        try {
            if(newAccount) sign = await createUserWithEmailAndPassword(authService, email, pw);
            else sign = await signInWithEmailAndPassword(authService, email, pw);
        } catch (error) {
            setErr(error.message);
        }
    }
    
    const toggleAccount = () => setNewAccount((prev) => !prev)

    const onSocialClick = async (event) => {
        const {
          target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "github") {
            provider = new GithubAuthProvider();
          }
          const data = await signInWithPopup(authService, provider);
          console.log(data);;
      };

    // form태그와 input태그로 회원가입을 작성함
    // onChange 메소드로 input의 text 내용 변화를 감지함.

    // 파이어베이스를 사용하여 댓글과 좋아요 기능 추가하려고 함.

    return (
        <div>
            <span onClick={toggleAccount}>{newAccount? "현재 회원가입 창" : "현재 로그인 창"} 클릭 시 변경됩니다.</span>
            <form onSubmit={onSubmit}>
                <input type="text" name="email" placeholder="Email" required value={email} onChange={onChange} />
                <input type="password" name="pw" placeholder="Email" required value={pw} onChange={onChange} />
                <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
            </form>
            <div>
                <button name="google" className="mr-4" onClick={onSocialClick}>Google 로그인</button>
                <button name="github" onClick={onSocialClick}>Github 로그인</button>
            </div>
        </div>
    );
}

export default Login;