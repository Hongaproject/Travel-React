import { useEffect, useState } from "react";
import Router from "./component/Router";
import { authService } from "./firebase";
import { useNavigate } from "react-router-dom";

function App() {

  // 한국관광공사에서 제공하는 TourAPI를 사용하고
  // 디자인은 tailwind CSS를 사용하여 시간 단축을 하려고 합니다.
  // 로그인, 댓글, 좋아요 기능을 추가하기 위해 firebase를 사용합니다.

  // 우선 먼저 제작 후 그 뒤에 상태관리등을 보수하려고 합니다.

  // 라이브러리 사용 
  // react-router-dom
  // axios
  // tailwind CSS
  // firebase

  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user); // 유저 나타나는지 확인용
      if(user){
        setIsLoggedIn(true); // 로그인
        navigator("/");
        setUserObj({ // firebase의 특정 부분만 가져와서 react한테 줌
          displayName: user.displayName,
          uid:user.uid,
          updateProfile: (args) => user.updateProfile(args),
        }); // onAuthStateChanged를 작동시켜 user를 받음 
      }else{
        setIsLoggedIn(false); // 로그아웃
      }
      setInit(true); 
    })
  }, []);

  return (
    <div>
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj} /> : "Loading..."}
    </div>
  );
}

export default App;
