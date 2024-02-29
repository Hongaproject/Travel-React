import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "./Home";
import RegionList from "./RegionList/RegionList";

function Router() {

    return (
      <>
        <Header />
          <div className="h-screen w-11/12 mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regionlist" element={<RegionList />} />
            </Routes>
          </div>
        <Footer />
      </>
    );
  }
  
  export default Router;
  