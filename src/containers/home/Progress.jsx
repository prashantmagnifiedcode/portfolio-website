import React from 'react'
import './progress.css'
const Progress=()=>{
    return(
        <>
       
{/* <body class=" flex justify-around items-center"> */}
<div className="relative  w-full flex flex-col">
      <div className="flex  justify-center mt-20 ">
        
           <span className='  mt-15 text-2xl font-medium text-white   border-2 border-indigo-500 py-2 px-20  rounded-full transform '>Technical Stack </span>
      </div>
      <div className=" flex justify-around flex-wrap pt-5 pb-5 w-full">




    <div class="Progress_container overflow-hidden  grid md:grid-cols-3 grid-flow-cols py-10 place-items-center">

    <div className='pBox text-white md:mb-0 mb-10'>
    <div className='pBox_content'>

    <p className='text-white text-medium flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="1em"
     viewBox="0 0 512 512"><path fill="#266822" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>&nbsp;MERN STACK</p>
    </div>

</div>
    <div className='pBox text-white md:mb-0 mb-10'>
    <div className='pBox_content'>

    <p className='text-white text-medium flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="1em"
     viewBox="0 0 512 512"><path fill="#266822" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>&nbsp;Etherum Blockchain</p>
    </div>

</div>
    <div className='pBox text-white md:mb-0 mb-10'>
    <div className='pBox_content'>

    <p className='text-white text-medium flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="1em"
     viewBox="0 0 512 512"><path fill="#266822" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>&nbsp; React Native</p>
    </div>

</div>
        
    </div>

    </div>
    </div>
{/* </body>  */}
        </>
    )
}
export default Progress