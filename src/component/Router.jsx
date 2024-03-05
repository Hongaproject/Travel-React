import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "./Home";
import RegionListMain from "./attraction/RegionList/RegionListMain";
import RegionDetail from "./attraction/RegionDetail/RegionDetail";

function Router() {

    // 지역코드 서울 1 인천 2 대전 3 대구 4 광주 5 부산 6 울산 7 제주 39
    // 데이터 전용 파일을 생성해서 Api 전송하기

    return (
      <>
        <Header />
          <div className="h-full w-11/12 mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regionlist" element={<RegionListMain />} />
              <Route path="/regiondetail/:id" element={<RegionDetail />} />
            </Routes>
          </div>
        <Footer />
      </>
    );
  }
  
  export default Router;
  