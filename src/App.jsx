/**
 * https://morioh.com/a/907e861d9482/build-and-deploy-a-responsive-portfolio-website-using-react-and-css
 */
// import "./global/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useHomeDataContext } from "./context/HomeDataContext";

import LoadingPage from "./components/LoadingPage";

function App() {
  const { loading } = useHomeDataContext();

  return (
    <>
      {loading && <LoadingPage />}
      
      {!loading && (
        <div className="app-container">
          <Header />
          <div>
            <Main />
            <Footer />
          </div>
        </div>
      )}

    </>
  );
}

export default App;
