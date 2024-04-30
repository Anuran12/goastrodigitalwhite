import React, { memo, useRef } from "react";
import { useState, useEffect } from "react";
import { AboutCard } from "../../Data/Home/About";
import { styles } from "../../styles";
import { AstroGif } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { WorkCard } from "../../Data/Home/About";

import { Icon } from "@iconify/react";

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
        <div className="w-[50%] h-full">
          <div className="mt-5 testimonial w-full px-1 relative">
            <div className="bg-black w-[2.2rem] absolute h-full -left-5 z-10 lg:block hidden"></div>
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              loop={true}
              spaceBetween={0}
              initialSlide={1}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 0,
                stretch: 150,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={400}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              pagination={{ clickable: true, enabled: true }}
              className="mySwiper cursor-default"
            >
              {WorkCard.map((data, index) => (
                <SwiperSlide
                  key={index}
                  className="mb-10 sm:mb-16 sm:w-[440px] lg:w-[550px] lg:h-[350px]"
                >
                  <div className="card bg-gradient-to-b w-auto sm:w-[240px] lg:w-[330px] rounded-xl from-[#00FFFF] to-[#000210] p-[1px] lg:mx-0 mx-6 transition-all duration-200 ease-out h-full">
                    <div className="bg-black rounded-xl py-8 px-8 h-full shadow-[rgba(0,0,0,0.45)_0px_25px_20px_-20px]">
                      <div className="flex md:justify-between md:items-center md:flex-row flex-col items-start  gap-y-6">
                        <div className="flex flex-col items-start justify-start gap-7">
                          <svg
                            width="25"
                            height="27"
                            viewBox="0 0 25 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.2789 19.8852L15.8833 4.02454C15.4629 3.12314 14.7017 2.42564 13.7671 2.0855C12.8324 1.74535 11.8009 1.79042 10.8995 2.21079C9.99814 2.63116 9.30064 3.39239 8.9605 4.32703C8.62035 5.26166 8.66542 6.29314 9.08579 7.19454L16.482 23.0545C16.9023 23.9559 17.6635 24.6535 18.5981 24.9937C19.5326 25.3339 20.5641 25.2889 21.4655 24.8686C22.3669 24.4483 23.0644 23.6872 23.4046 22.7526C23.7448 21.818 23.6992 20.7866 23.2789 19.8852Z"
                              stroke="#008BEF"
                              stroke-width="2"
                            />
                            <path
                              d="M12.0799 15.1241L8.38115 23.0541C8.17302 23.5004 7.87901 23.9014 7.51591 24.2341C7.15281 24.5668 6.72773 24.8247 6.26494 24.9932C5.80215 25.1616 5.31072 25.2372 4.8187 25.2157C4.32669 25.1942 3.84373 25.076 3.3974 24.8678C2.49613 24.4475 1.79872 23.6864 1.45859 22.7519C1.11845 21.8174 1.16344 20.786 1.58365 19.8847L8.9149 4.16406"
                              stroke="#008BEF"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            <path
                              d="M3.39894 24.8685C5.27596 25.7437 7.50714 24.9316 8.38241 23.0546C9.25768 21.1776 8.4456 18.9464 6.56858 18.0711C4.69155 17.1959 2.46037 18.008 1.5851 19.885C0.709832 21.762 1.52191 23.9932 3.39894 24.8685Z"
                              stroke="#008BEF"
                              stroke-width="2"
                            />
                          </svg>
                          <div>
                            <h1 className="text-[22px] font-bold text-[#BABABA]">
                              {data.name}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-base md:text-lg font-normal py-4 text-[#BABABA]">
                          {data.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
