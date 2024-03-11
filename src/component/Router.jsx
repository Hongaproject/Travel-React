import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "./Home";
import RegionListMain from "./attraction/RegionList/RegionListMain";
import DetailSeoul from "./attraction/RegionDetail/DetailSeoul";

function Router() {

    // 지역코드 서울 1 인천 2 대전 3 대구 4 광주 5 부산 6 울산 7 제주 39
    // 데이터 전용 파일을 생성해서 Api 전송
    // Router파일서 API 데이터를 props하여 디테일 파일에 전달하여 세부 페이지 작업 예정

    return (
      <>
        <Header />
          <div className="h-full w-11/12 mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regionlist" element={<RegionListMain />} />
              <Route path="/DetailSeoul/:idx" element={<DetailSeoul />} />
            </Routes>
          </div>
        <Footer />
      </>
    );
  }
  
  export default Router;
  