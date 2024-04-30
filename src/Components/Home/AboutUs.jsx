import React, { memo, useRef } from "react";
import { useState, useEffect } from "react";
import { AboutCard } from "../../Data/Home/About";
import { styles } from "../../styles";
import { AstroGif } from "../../assets";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

const AboutUs = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const ToggleCard = (index) => {
    if (index === activeIndex) {
      // Reset the loading bar and timer for the already opened card
      setLoadingProgress(0);
      setStartTime(Date.now());
      setActiveIndex(activeIndex === -1 ? -1 : -2);
    } else {
      // Switch to the clicked card and reset loading bar and timer
      setActiveIndex(index);
      setLoadingProgress(0);
      setStartTime(Date.now());
    }
  };

  const updateLoadingProgress = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - (startTime + 300);
    const progress = (elapsed / 10000) * 100;

    setLoadingProgress(progress >= 100 ? 100 : progress);

    if (progress >= 100 && activeIndex !== -1) {
      ToggleCard((activeIndex + 1) % AboutCard.length);
      setStartTime(Date.now());
    }
  };

  useInterval(updateLoadingProgress, 1000 / 60); // 60 FPS

  return (
    <div>
      <section className="md:py-4 work-sans relative bg-white" id="about-us">
        <div className={`${styles.maxWidth} mt-16 mb-8 md:my-16 px-6 py-16`}>
          <div className="flex items-start justify-between gap-x-16 md:flex-row flex-col 2xl:h-[450px] h-auto">
            <div className="w-full flex flex-col justify-center items-start">
              <div className="pb-3 md:pb-5 w-[70%] flex justify-center">
                <h1
                  className={`${styles.sectionHeadText} flex md:justify-start justify-center items-start text-[#00B6EF]`}
                >
                  Who We Are
                </h1>
              </div>
              <img
                src={AstroGif}
                alt="Animated Astro Logo"
                className="select-none pointer-events-none w-auto max-w-[70%]"
              />
            </div>
            <div>
              {/* Cards */}
              {AboutCard.map((cardData, index) => (
                <div key={index} className="relative mb-2 w-full md:w-[600px]">
                  {/* Loading Bar */}
                  {/* <div
                  className="absolute bottom-0 left-0 h-[1px]"
                  style={{
                    width: activeIndex === index ? `${loadingProgress}%` : "0%",
                    backgroundImage: cardData.loadingBarColor || "blue",
                  }}
                /> */}

                  {/* Card Content */}
                  <div
                    className={`md:px-8 px-6 mb-8 cursor-pointer
                    bg-white 
                   transition-all duration-200 ease-linear py-5 rounded-[10px]`}
                    style={{ border: cardData.bg }}
                    onClick={() => ToggleCard(index)}
                  >
                    <div>
                      <h1
                        className={`${
                          activeIndex === index
                            ? `${cardData.HeadColor}`
                            : "text-[#2f2f2f]"
                        } transition-all capitalize duration-200 ease-out text-xl md:text-2xl font-bold delay-150`}
                      >
                        {cardData.Tab}
                      </h1>
                    </div>
                    <div
                      className={`${
                        activeIndex === index
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr] "
                      } w-full grid transition-[grid-template-rows] delay-75 duration-[350ms] ease-out`}
                    >
                      <div
                        className={`${
                          activeIndex === index ? "opacity-100" : "opacity-0"
                        } opacity-0 transition-opacity delay-100 ease-linear duration-200 overflow-hidden`}
                      >
                        <p className="md:text-lg text-base pb-3 pt-4 font-normal text-black">
                          {cardData.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute h-[85%] w-32 bg-gradient-to-tl from-[#000061] to-[#00FFFF] top-[10%] right-0 rounded-l-[40px] p-1 pr-0">
          <div className="w-full h-full bg-white rounded-l-[39px]">
            <div className="h-full flex items-center -ml-4">
              <ul className="flex flex-col gap-12">
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
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-black flex px-[100px] py-[150px]">
        <div className=" text-white w-[40%] flex flex-col gap-12">
          <h1 className="text-[65px] font-bold leading-[65px]">
            What We
            <br /> Can Do
          </h1>
          <p className=" text-[18px] w-[50%] leading-5">
            LEVERAGE OUR TEAM AND COMPREHENSIVE DIGITAL SERVICES
          </p>
          <button className="py-2 px-10 pr-8 rounded-full w-fit bg-gradient-to-br from-[#00FFFF] to-[#000061] text-[20px] flex gap-3 items-center">
            Order Yours
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div className="w-[60%] bg-red-500 h-full"></div>
      </div>
    </div>
  );
});

export default AboutUs;
