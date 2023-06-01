
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";
import Error from './containers/error/'
// import Prashant from './prashantSrivastava.pdf'
function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('PrashantSrivastava.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'PrashantSrivastava.pdf';
            alink.click();
        })
    })
}
  return (
    <>
    <div className="App relative">
      <div className="fixed  left-2 -translate-x-1/2 translate-y-[400px] flex items-center justify-center text-white top-20 h-60 w-[28px] bg-indigo-500 rounded-lg ml-5" style={{zIndex:20}} >
            <button onClick={onButtonClick} className="-rotate-90  text-md text-bold">Download&nbsp;&nbsp;Resume</button>
          </div>
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      {/* navbar */}
      <Navbar />

      <div className="App __main-page-content">
          <div className='TopBox text-white absolute left-[50%] top-60 translate-x-[-50%] md:hidden flex  '>
    <div className='TopBox_content'>
    <img class=" h-20 w-20  rounded-full object-cover" src="https://avatars.githubusercontent.com/u/82441036?v=4"alt=""/>
                             
    </div>


</div>  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="*" element={<Error />} />
      </Routes>
      </div>

    </div>
    </>
  );
}

export default App;
