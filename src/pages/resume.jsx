import React from "react";
import image1 from "../assets/profile.jpeg"

function App(){
    return (
        <div className="w-full h-screen flex-row items-center justify-center sm:px-[20rem] font-mono gap-5 overflow-x-hidden">
            <div className="flex-row justify-center text-center mb-5 hidden sm:block">
                <h2 className="text-[40px] font-bold">Resume.</h2>
                <div className="w-full flex items-center justify-center mt-5 sm:mt-6">
                    <p className="text-sm/6 text-center">
                    I'm a fourth year Information Technology student in Isabela State University. Exploring technologies for web <br/>
                    development for both frontend and backend. Creating web application for innovative works such management system.</p>
                </div>
            </div>

            <div className="flex justify-center grid grid-cols-none sm:grid-cols-3 gap-9 ">
                {/*information */}
                <div className="flex-row justify-between gap-5 sm:col-span-2 w-auto sm:w-full">
                    <div className="flex-row justify-center items-center gap-[3rem] mt-8 mb-8">
                        <div className="flex items-center justify-center">
                            <h4 className="text-[20px] sm:text-[25px]">Freiden Duliente</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex gap-0 sm:gap-2">
                                <p className="text-[11px] sm:text-[13px] ">09972106703 | </p>
                                <p className="text-[11px] sm:text-[13px] "> freidenduliente02@gmail.com </p>
                                <p className="text-[11px] sm:text-[13px] sm:flex hidden"> | https://freidenduliente.vercel.app</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row mb-5">
                        <div className="flex items-center">
                            <p className="text-[14px] tracking-[0.1em] font-bold">EDUCATION</p>
                        </div>
                         <hr className="h-[2px]  bg-black mb-3"/>
                         <div className="flex-row items-center">
                            <div className="flex justify-between items-center gap-9">
                                <div className="flex items-center">
                                    <p className="sm:text-[14px] text-[11px]  font-bold text-justify sm:text-left">Isabela State University, College of Engineering, Architecture, and Technology</p>
                                </div>
                                <div className="flex ">
                                    <p className="sm:text-[14px] text-[10px]  font-bold text-right sm:text-left">Ilagan Campus</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <p className="sm:text-[12px] text-[11px] sm:text-left text-justify italic">Bachelor of Science in Information Technology <br/> Major in Networking and Security</p>
                                </div>
                                <div className="flex mb-5">
                                    <p className="sm:text-[12px] text-[10px] sm:text-left text-right italic">August 2026</p>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className="flex-row items-center mb-5">
                        <div className="flex items-center">
                            <p className="text-[14px] tracking-[0.1em] font-bold">TECHNICAL SKILLS</p>
                        </div>
                         <hr className="h-[2px] w-full bg-black mb-3"/>
                         <div className="flex items-center gap-2">
                            <p className="sm:text-[14px] text-[11px] text-justify sm:text-left"><b>Lnaguage:</b> Python, SQL, HTML, CSS</p>
                         </div>
                         <div className="flex items-center gap-2">
                            <p className="sm:text-[14px] text-[11px] text-justify sm:text-left"><b>Frameworks:</b> Django, ReactJs, Tailwindcss, Scikit-Learn</p>
                         </div>
                         <div className="flex items-center gap-2">
                            <p className="sm:text-[14px] text-[11px] text-justify sm:text-left"><b>Database:</b> MySql</p>
                         </div>
                         <div className="flex items-center gap-2">
                            <p className="sm:text-[14px] text-[11px] text-justify sm:text-left"><b>API:</b> REST APIs</p>
                         </div>
                         <div className="flex items-center gap-2">
                            <p className="sm:text-[14px] text-[11px] text-justify sm:text-left"><b>Tools and Platforms:</b> Git, Github, Google Cloud Platform, Vercel, Digital Ocean, Railway, Heroku, Postman, Obsidian, Linux</p>
                         </div>
                    </div>
                    
                    <div className="flex-row">
                        <div className="flex items-center">
                            <p className="text-[14px] tracking-[0.1em] font-bold">EXPERIENCE</p>
                        </div>
                        <hr className="h-[2px] w-full bg-black mb-3"/>
                        <div className="flex-row justify-between items-center">
                            <div className="flex-row items-center">
                                <p className="sm:text-[14px] text-[11px] italic">Research and Development</p>
                                <p className="sm-text-[14px] text-[11px] italic">[March 2025 to September 2026]</p>
                            </div>
                            <div className="flex-row mt-2">
                                <ul className="sm:text-[14px] text-[11px] list-disc pl-8">
                                    <li>Designed and developed a machine-learning–based anomaly detection system to detect network traffic irregulatories.</li>
                                    <li>Conducted research, data analysis, and model implementation using Python and Scikit-learn.</li>
                                    <li>Built a full-stack web interface using Django (backend) and ReacjtJS (frontend)</li>
                                    <li>Deployed the application on Heroku and Vercel, ensuring cloud-based accessibility and scalability.</li>
                                </ul>
                            </div>
                            <div className="flex-row items-center mt-5">
                                <p className="sm:text-[14px] text-[11px] italic">Web Development Intern</p>
                                <p className="sm:text-[14px] text-[11px] italic">[Ewan ko ba]</p>
                            </div>
                            <div className="flex-row mt-2">
                                <ul className="sm:text-[14px] text-[11px] list-disc pl-8">
                                    <li>Next sem na to</li>
                                    <li>kinakabahan sa defense</li>
                                    <li>awan kwarta min anya mittin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* images */}
                <div className="flex-row sm:cols-span-1 py-8 gap-5">
                    <div className="hidden sm:flex gap-1">
                        <img src={image1} className="w-[20rem] h-[12rem]" />
                        <img src={image1} className="w-[10rem] h-[12rem]" />
                    </div>
                    <div className="hidden sm:flex w-full">
                        <img src={image1} className="w-full h-[12rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;