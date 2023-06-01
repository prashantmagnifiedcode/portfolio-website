import React, { useState } from "react";

import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
 
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  
  return (
    <header class=" h-60 w-full flex items-baseline  justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 pl-5 pt-12  ">
      <button
        type="button"
        class=" flex-col items-center justify-center flex md:hidden"
        aria-controls="mobile-menu"
        aria-expanded="true"
        onClick={handleToggleIcon}
      >
        <span class="sr-only">Open main menu</span>
        <span class="bg-white dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out -translate-y-0.5"></span>
        <span class="bg-white dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out opacity-100 my-0.5"></span>
        <span class="bg-white dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5"></span>
      </button>
      <div class="w-full flex justify-between items-center md:flex hidden">
        <nav class="flex items-center justify-center">
          <a
            class="mr-4  rounded  relative group text-2xl  text-white"
            href="/"
          >
            Home
            <span
              class="
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              w-full lg:bg-light lg:dark:bg-dark
              "
            >
              &nbsp;
            </span>
          </a>
 
          <a
            class="mx-4  rounded relative group text-2xl  text-white"
            href="/about"
          >
            Tech Skill
            <span
              class="
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               w-0 lg:bg-light lg:dark:bg-dark
              "
            >
              &nbsp;
            </span>
          </a>
          <a
            class="mx-4  rounded relative group text-2xl  text-white"
            href="projects"
          >
            Projects
            <span
              class="
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               w-0 lg:bg-light lg:dark:bg-dark
              "
            >
              &nbsp;
            </span>
          </a>
          <a
            class="ml-4  rounded relative group text-2xl  text-white"
            href="/contact"
          >
            Contact
            <span
              class="
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               w-0 lg:bg-light lg:dark:bg-dark
              "
            >
              &nbsp;
            </span>
          </a>
        </nav>
        <nav class="flex items-center justify-center flex-wrap lg:mt-2 ">
          <a
            target="_blank"
            class="w-9 mr-3"
            href="#"
            aria-label="Checkout my twitter profile"
            tabindex="0"
          >
            <svg
              xmlns="http:www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 286 209"
              class="w-full h-auto undefined"
            >
              <path fill="none" d="M0 0h256v209H0z"></path>
              <path
                fill="#55acee"
                d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            class="w-9 mx-3"
            href="https://github.com/prashantmagnifiedcode"
            aria-label="Checkout my github profile"
            tabindex="0"
          >
            <svg
              xmlns="http:www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              class="w-full h-auto undefined"
            >
              <path fill="none" d="M0 0h512v512H0z"></path>
              <path
                fill="white"
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            class="w-9 mx-3"
            href="https://www.linkedin.com/in/prashant-srivastava-7164ba211"
            aria-label="Checkout my linkedin profile"
            tabindex="0"
          >
            <svg
              xmlns="http:www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              class="w-full h-auto undefined"
            >
              <path fill="none" d="M0 0h256v256H0z"></path>
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60"></rect>
                <rect width="256" height="256" fill="#0A66C2" rx="60"></rect>
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                ></path>
              </g>
            </svg>
          </a>
         

          <button
            class="w-9 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  
            bg-light  text-dark
            "
            aria-label="theme-switcher"
          >
            <svg
              xmlns="http:www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-full h-auto fill-dark"
            >
              <rect
                x="0"
                y="0"
                width="24"
                height="24"
                fill="rgba(255, 255, 255, 0)"
              ></rect>
              <g
                fill="none"
                stroke="currentColor"
                stroke-dasharray="2"
                stroke-dashoffset="2"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path d="M0 0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                  ></animate>
                </path>
                <path d="M0 0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                  ></animate>
                </path>
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                ></animateTransform>
              </g>
              <g fill="currentColor">
                <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                  ></animate>
                </path>
                <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                  ></animate>
                </path>
              </g>
              <g
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"></path>
                <set attributeName="opacity" begin="0.6s" to="0"></set>
              </g>
              <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
                <circle cx="12" cy="12" r="12" fill="#fff"></circle>
                <circle cx="18" cy="6" r="12" fill="#fff">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                  ></animate>
                </circle>
                <circle cx="18" cy="6" r="10">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                  ></animate>
                </circle>
              </mask>
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="currentColor"
                mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
                opacity="0"
              >
                <set attributeName="opacity" begin="0.6s" to="1"></set>
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.6s"
                  dur="0.4s"
                  values="10;6"
                ></animate>
              </circle>
            </svg>
          </button>
        </nav>
      </div>
      <div class="absolute left-[50%] top-2 translate-x-[-50%] ">
        <div class="flex flex-col items-center justify-center mt-2">
          <a
            class="flex items-center justify-center rounded-full w-20 h-20  bg-dark text-white dark:border-2 dark:border-solid dark:border-light text-3xl font-bold"
            href="/"
            //  style={{background-color: rgb(18, 18, 18);}}
          >
            PS
          </a>
        </div>
      </div>
      {
        toggleIcon?
             <div
             class="min-w-[80vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-indigo-500 rounded-lg z-50 backdrop-blur-md  md:hidden block"
              style={{"opacity": 1, "transform": "translateX(-50%) translateY(-50%) scale(1) translateZ(0px)"}}
           >
             <nav class="flex items-center justify-center flex-col">
               <Link 
               to="/"
               class="mr-4 lg:m-0 lg:my-2  rounded relative group text-white text-medium text-xl my-1">
                 Home
               </Link>
               <Link 
               to="/"
               class="mr-4 lg:m-0 lg:my-2  rounded relative group text-white  text-medium text-xl my-1">
                 About
               </Link>
               <Link 
               to="/"
               class="mr-4 lg:m-0 lg:my-2  rounded relative group text-white  text-medium text-xl my-1">
                 Project
               </Link>
               <div 
                 onClick={()=> setToggleIcon(false)}
               class="mr-4 lg:m-0 lg:my-2  rounded relative group text-yellow-300  text-medium text-xl my-1">
                 Close Menu
               </div>
               
             </nav>
             <nav class="flex items-center justify-center  mt-2 ">
               <a
                 target="_blank"
                 class="w-9 m-1 mr-3 sm:mx-1"
                 href="#"
                 aria-label="Checkout my twitter profile"
                 tabindex="0"
               >
                 <svg
                   xmlns="http:www.w3.org/2000/svg"
                   width="1em"
                   height="1em"
                   viewBox="0 0 256 209"
                   class="w-full h-auto undefined"
                 >
                   <path fill="none" d="M0 0h256v209H0z"></path>
                   <path
                     fill="#55acee"
                     d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                   ></path>
                 </svg>
               </a>
               <a
                 target="_blank"
                 class="w-6 m-1 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
                 href="#"
                 aria-label="Checkout my github profile"
                 tabindex="0"
               >
                 <svg
                   xmlns="http:www.w3.org/2000/svg"
                   width="1em"
                   height="1em"
                   viewBox="0 0 512 512"
                   class="w-full h-auto undefined"
                 >
                   <path fill="none" d="M0 0h512v512H0z"></path>
                   <path
                     fill="currentColor"
                     d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
                   ></path>
                 </svg>
               </a>
               <a
                 target="_blank"
                 class="w-6 m-1 mx-3 sm:mx-1"
                 href="#"
                 aria-label="Checkout my linkedin profile"
                 tabindex="0"
               >
                 <svg
                   xmlns="http:www.w3.org/2000/svg"
                   width="1em"
                   height="1em"
                   viewBox="0 0 256 256"
                   class="w-full h-auto undefined"
                 >
                   <path fill="none" d="M0 0h256v256H0z"></path>
                   <g fill="none">
                     <rect width="256" height="256" fill="#fff" rx="60"></rect>
                     <rect width="256" height="256" fill="#0A66C2" rx="60"></rect>
                     <path
                       fill="#fff"
                       d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                     ></path>
                   </g>
                 </svg>
               </a>
               
               <button
                 class="w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1
                 bg-dark  text-light
                 "
                 aria-label="theme-switcher"
               >
                 <svg
                   xmlns="http:www.w3.org/2000/svg"
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   class="w-full h-auto fill-dark"
                 >
                   <g
                     fill="none"
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                   >
                     <g stroke-dasharray="2">
                       <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                         <animate
                           fill="freeze"
                           attributeName="stroke-dashoffset"
                           dur="0.2s"
                           values="4;2"
                         ></animate>
                       </path>
                       <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                         <animate
                           fill="freeze"
                           attributeName="stroke-dashoffset"
                           begin="0.2s"
                           dur="0.2s"
                           values="4;2"
                         ></animate>
                       </path>
                     </g>
                     <path
                       fill="currentColor"
                       d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                       opacity="0"
                     >
                       <set attributeName="opacity" begin="0.5s" to="1"></set>
                     </path>
                   </g>
                   <g fill="currentColor" fill-opacity="0">
                     <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                       <animate
                         id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                         dur="0.4s"
                         values="0;1"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                         dur="0.4s"
                         values="1;0"
                       ></animate>
                     </path>
                     <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                         dur="0.4s"
                         values="0;1"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                         dur="0.4s"
                         values="1;0"
                       ></animate>
                     </path>
                     <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                         dur="0.4s"
                         values="0;1"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                         dur="0.4s"
                         values="1;0"
                       ></animate>
                     </path>
                     <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                         dur="0.4s"
                         values="0;1"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="fill-opacity"
                         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                         dur="0.4s"
                         values="1;0"
                       ></animate>
                     </path>
                   </g>
                   <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
                     <circle cx="12" cy="12" r="12" fill="#fff"></circle>
                     <circle cx="22" cy="2" r="3" fill="#fff">
                       <animate
                         fill="freeze"
                         attributeName="cx"
                         begin="0.1s"
                         dur="0.4s"
                         values="22;18"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="cy"
                         begin="0.1s"
                         dur="0.4s"
                         values="2;6"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="r"
                         begin="0.1s"
                         dur="0.4s"
                         values="3;12"
                       ></animate>
                     </circle>
                     <circle cx="22" cy="2" r="1">
                       <animate
                         fill="freeze"
                         attributeName="cx"
                         begin="0.1s"
                         dur="0.4s"
                         values="22;18"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="cy"
                         begin="0.1s"
                         dur="0.4s"
                         values="2;6"
                       ></animate>
                       <animate
                         fill="freeze"
                         attributeName="r"
                         begin="0.1s"
                         dur="0.4s"
                         values="1;10"
                       ></animate>
                     </circle>
                   </mask>
                   <circle
                     cx="12"
                     cy="12"
                     r="6"
                     fill="currentColor"
                     mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
                   >
                     <set attributeName="opacity" begin="0.5s" to="0"></set>
                     <animate
                       fill="freeze"
                       attributeName="r"
                       begin="0.1s"
                       dur="0.4s"
                       values="6;10"
                     ></animate>
                   </circle>
                 </svg>
               </button>
             </nav>
           </div>:null
      }
    </header>

  );
};

export default Navbar;
