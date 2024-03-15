import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "./Home";
import RegionListMain from "./attraction/RegionList/RegionListMain";
import DetailSeoul from "./attraction/RegionDetail/DetailSeoul";
import DetailDeajeon from "./attraction/RegionDetail/DetailDeajeon";
import DetailGwangju from "./attraction/RegionDetail/DetailGwangju";
import DetailDaegu from "./attraction/RegionDetail/DetailDaegu";
import DetailBusan from "./attraction/RegionDetail/DetailBusan";
import DetailUlsan from "./attraction/RegionDetail/DetailUlsan";
import DetailInchoen from "./attraction/RegionDetail/DetailInchoen";
import DetailJeju from "./attraction/RegionDetail/DetailJeju";
import Login from "../logsig/login";
import LoginHeader from "../layout/LoginHeader";

function Router({isLoggedIn, userObj}) {

    // 지역코드 서울 1 인천 2 대전 3 대구 4 광주 5 부산 6 울산 7 제주 39
    // 데이터 전용 파일을 생성해서 Api 전송
    // Router파일서 API 데이터를 props하여 디테일 파일에 전달하여 세부 페이지 작업 예정

    // 로그인 화면 재구상 중.
    return (
      <>
        {isLoggedIn ? <LoginHeader userObj={userObj} /> : <Header />}
          <div className="h-full w-11/12 mx-auto">
            <Routes>
              {/* {
                isLoggedIn ? (
                  <>
                    <Route exact path="/" element={<Home />} /> 
                  </>
                ) : (
                  <>
                    <Route exact path="/" element={<Login />} />
                  </>
                  
                )
              }  */}
              <Route path="/" element={<Home />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/regionlist" element={<RegionListMain />} />
              <Route path="/DetailSeoul/:idx" element={<DetailSeoul />} />
              <Route path="/DetailDaejeon/:idx" element={<DetailDeajeon />} />
              <Route path="/DetailGwangju/:idx" element={<DetailGwangju />} />
              <Route path="/DetailDaegu/:idx" element={<DetailDaegu />} />
              <Route path="/DetailBusan/:idx" element={<DetailBusan />} />
              <Route path="/DetailUlsan/:idx" element={<DetailUlsan />} />
              <Route path="/DetailInchoen/:idx" element={<DetailInchoen />} />
              <Route path="/DetailJeju/:idx" element={<DetailJeju />} />
            </Routes>
          </div>
        <Footer />
      </>
    );
  }
  
  export default Router;
  