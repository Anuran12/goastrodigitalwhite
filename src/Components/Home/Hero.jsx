import React from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import bgDrop from "../../assets/bg-grade.svg";

export default function Hero() {
  const btnStyles = [
    "relative w-full md:w-[300px] h-[60px] flex items-center justify-center overflow-hidden rounded-full work-sans text-base md:text-lg md:font-medium font-light duration-200 ease-in-out transition-all",
  ];

  return (
    <>
      <section
        className="lg:h-[650px] w-full work-sans relative bg-white"
        id="home"
      >
        <div class="container__glow2"></div>
        <div className="min-h-screen overflow-hidden relative">
          <div class="container__glow2"></div>
          <div className="hero flex flex-row h-[100vh] w-full mt-10">
            <div className="left h-full w-[60%] flex justify-center items-center pl-[120px]">
              <div className="flex flex-col gap-20 -mt-16">
                <h1 className={`text-[55px] text-black font-bold`}>
                  We Craft Digital Experiences
                  <br /> That{" "}
                  <span className="bg-gradient-to-br from-[#00FFFF] to-[#000061] bg-clip-text text-transparent">
                    Resonate
                  </span>{" "}
                  and{" "}
                  <span className="bg-gradient-to-br from-[#00FFFF] to-[#000061] bg-clip-text text-transparent">
                    Convert
                  </span>
                </h1>
                <p className={`text-black text-[22px]`}>
                  Our mission is to empower businesses by enhancing their
                  <br /> online presence with innovative, custom-made digital
                  solutions.
                </p>
                <div className="flex flex-row gap-5 items-center">
                  <div className="p-[1.5px] px-16 py-2 rounded-full w-fit bg-gradient-to-br from-[#00FFFF] to-[#000061]">
                    <h1
                      className={`text-white font-medium text-[18px] leading-5 text-center`}
                    >
                      Text Us
                      <br /> &#40;323&#41; 595-3041
                    </h1>
                  </div>
                  <h1 className={`text-black font-medium text-[22px]`}>OR</h1>
                  <div className="p-[1.5px] rounded-full w-fit bg-gradient-to-br from-[#00FFFF] to-[#000061]">
                    <div className="px-9 py-3 rounded-full w-fit bg-white">
                      <h1
                        className={` font-medium text-[18px] bg-gradient-to-br from-[#00FFFF] to-[#000061] bg-clip-text text-transparent`}
                      >
                        Schedule a 15 Minute Call
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right h-full w-[40%] relative overflow-hidden -top-10 pt-6">
              <ul className="orbit-wrap z-10 absolute w-[29em] h-[29em] aspect-square rounded-full border-solid border-2 border-[#3FBAFF] -right-48 p-8">
                <li>
                  <ul class="ring-0">
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                    <li>
                      <i class="orbit-icon">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx="35.5137"
                            cy="36.373"
                            r="35.5137"
                            fill="url(#paint0_radial_1_2)"
                          ></circle>
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_2"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(23.4669 21.9014) rotate(52.3135) scale(65.954)"
                            >
                              <stop stop-color="#00FFFF"></stop>
                              <stop offset="1" stop-color="#000061"></stop>
                            </radialGradient>
                          </defs>
                        </svg>
                      </i>
                    </li>
                  </ul>
                </li>
                <div className=" w-full h-full rounded-full border-solid border-2 border-[#3FBAFF] p-8 relative">
                  <div className=" w-full h-full rounded-full border-solid border-2 border-[#3FBAFF] p-4">
                    <div className=" w-full h-full rounded-full bg-gradient-to-b from-[#16AAC8]/50 to-[#1098CB]/50 p-10">
                      <div className=" w-full h-full rounded-full bg-gradient-to-b from-[#16AAC8]/80 to-[#1098CB]/80 p-10 shadow-[0_35px_35px_-15px_rgba(0,0,0,0.3),0_35px_35px_55px_rgba(0,0,0,0.3)]">
                        <div className=" w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#1098CB] to-[#00D4FF] shadow-[0_35px_35px_-15px_rgba(0,0,0,0.3),0_35px_35px_55px_rgba(0,0,0,0.3)]">
                          <svg
                            width="188"
                            height="134"
                            viewBox="0 0 188 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M56.9182 133.948L77.9112 100.176H106.184C112.899 100.176 120.798 100.176 126.17 100.568C123.148 95.8586 118.43 87.8027 114.737 81.5233L94.5924 46.7593L41.792 133.948H0.654297L72.7159 15.135C77.4164 7.49224 84.308 0.407227 95.2286 0.407227C105.637 0.407227 112.528 6.89322 117.388 15.135L187.612 133.948H56.9182Z"
                              fill="#F0FAFD"
                              fill-opacity="0.7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
