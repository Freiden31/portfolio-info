import React from "react";
import profile from '../assets/profile.jpeg'
import drawing01 from "../assets/drawing01.jpg"

function Home() {
    return (
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-[5rem] font-mono overflow-hidden mt-[2rem] sm:mt-[10rem] ">
            <div className="image w-60 h-60 sm:w-[33rem] sm:h-[33rem] flex-shrink-0 active:scale-110 transition-transform eas-in-out duration-500">
                <img src={profile} alt="" className="h-full w-full rounded-4xl object-ceover" />
            </div>
            <div className="flex flex-col items-center justify-center mt-[-2rem] sm:mt-0">
                <div className="w-full flex justify-end mt-[-5rem] ml-[15rem] z-0 hidden sm:flex">
                    <img src={drawing01} alt="" className="h-[13rem] w-[20rem] rotate-347" />
                </div>
                <div className="flex flex-col justify-center z-1 sm:mt-[-5rem]">
                    <h1 className=" text-[20px] sm:text-[40px] font-bold">I'm Freiden Duliente</h1>
                    <h1 className="text-[12px] sm:text-[20px] font-bold">an aspiring Junior Software Engineer.</h1>
                </div>
                <div className="mt-[2rem] flex flex-col items-center justify-center w-65 sm:w-[30rem] max-w-full">
                    <p className="text-[12px] sm:text-sm/6">I'm a fourth year Information Technology student in Isabela State University. 
                    Exploring technologies for web development for both frontend and backend. Creating web application for innovative works such management system.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 mt-[2rem]">
                    <div className="h-8 w-[15.5rem] text-[14px] sm:text-[16px] sm:w-[15rem] p-5 bg-[#02366dff] flex items-center justify-center rounded-tl-[15px] rounded-br-[15px]"><a href="#" className="text-white">LINKEDIN</a></div>
                    <div className="h-8 w-[15.5rem] text-[14px] sm:text-[16px] sm:w-[15rem] p-5 bg-[#02366dff] flex items-center justify-center rounded-tl-[15px] rounded-br-[15px]"><a href="#" className="text-white">PROJECTS</a></div>
                    <div className="h-8 w-[15.5rem] text-[14px] sm:text-[16px] sm:w-[15rem] p-5 bg-[#02366dff] flex items-center justify-center rounded-tl-[15px] rounded-br-[15px]"><a href="#" className="text-white">HOME</a></div>
                </div>
            </div>
        </div>
    )
}

export default Home;