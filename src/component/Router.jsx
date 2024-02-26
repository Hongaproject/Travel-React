import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "./Home";

function Router() {

    return (
      <>
        <Header />
          <div className="h-screen w-11/12 m-auto mt-6 pt-6">
            <Home />
          </div>
        <Footer />
      </>
    );
  }
  
  export default Router;
  