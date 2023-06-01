import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.css";
import Contact from '../contact/'
import Tech from '../tech'
import Progress from "./Progress";
const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <>

    <div className='TopBox text-white absolute left-[50%] top-2 translate-x-[-50%] md:hidden flex  '>
    <div className='TopBox_content'>
    <img class=" h-20 w-20  rounded-full object-cover" src="https://avatars.githubusercontent.com/u/82441036?v=4"alt=""/>
                             
    </div>


</div>
    <section id="home" className="home relative">
   

      <div className="__text-wrapper">
        <span className=" md:text-5xl md:leading-relaxed	 text-3xl  text-white ">
          Hello, I'm Prashant Srivastava
          <br />
          <span className="md:text-[20px] text-[12px]">

          <span className="text-medium text-yellow-400">MERN Stack &nbsp;</span> && <span className="text-medium text-yellow-400"> &nbsp;Blockchain</span> &nbsp; Developer
          </span>
        </span>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
     
      <Progress/>
   
    <div className="relative  w-full flex flex-col" id="projects">
      <div className="flex  justify-center mt-10 mb-3 ">
        
           <span className='  mt-15 text-2xl font-medium text-white   border-2 border-yello-500 py-2 px-20  rounded-full transform '>Astonished Project</span>
      </div>
      <div className=" flex justify-around flex-wrap py-10 w-full">

     
        <Tech imgtech="https://cdn.decrypt.co/wp-content/uploads/2023/04/Ethereum-shutterstock_2022173927-16x9-1-gID_1.jpg" />
        <Tech imgtech="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"/>
        <Tech imgtech="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1129719/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png"/>
        <Tech imgtech="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"/>
      </div>
      </div>
     
      <Contact/>
    </>
  );
};
export default Home;
