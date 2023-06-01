import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";

const Tech=({imgtech})=>{
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return(
        <>
    

      <Tilt>
        <div className="ml-2 mb-3 mt-3 w-96 p-2 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src={imgtech} class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700">Technical Stack </p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">Code Source</p>
                        </div>
                        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src={imgtech} alt=""/>
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src={imgtech} alt=""/>
                            </span>
                            
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Go to <span>--</span></p>
                        </div>
                        <a href="https://github.com/prashantmagnifiedcode" class="linear bg-indigo-500 rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Github</a>
                    </div>
                </div>
            </div>
        </div>
      </Tilt>

    
 
        </>
    )
}
export default Tech

