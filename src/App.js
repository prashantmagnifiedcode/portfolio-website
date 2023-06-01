
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <>
    <div className="App relative">
      <div className="fixed  left-2 -translate-x-1/2 translate-y-[300px] flex items-center justify-center text-white top-20 h-60 w-[28px] bg-indigo-500 rounded-lg ml-7" style={{zIndex:20}} >
            <span className="-rotate-90  text-md text-bold">Download&nbsp;&nbsp;Resume</span>
          </div>
      
      {/* particles js */}
      {/* {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )} */}
      {/* navbar */}
      <Navbar />

      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      </div>

    </div>
    </>
  );
}

export default App;
