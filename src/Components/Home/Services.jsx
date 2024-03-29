import React, { useEffect, useRef, useState } from 'react'
import { styles } from '../../styles'
// import { CardData } from '../../Data/Home/Services';
import { Player } from '@lordicon/react';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export default function Services() {

  const CardData = [
    {
      id: 1,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/dqrpfjei.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Custom Websites",
      para: "Crafting modern, responsive, and unique websites with compelling content is our specialty."
    },
    {
      id: 2,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/nmguxqka.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Full Stack Development",
      para: "Building robust & efficient applications with the latest in technology, including ML/AI and ChatGPT."
    },
    {
      id: 3,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/bfqujiem.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Digital Marketing & SEO",
      para: "Turn clicks into customers with digital marketing and up-to-date SEO that really works."
    },
    {
      id: 4,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/pwfsvzjl.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Creative Design & Graphics",
      para: "Guaranteeing excellence in every stroke, from logos to branding. We promise designs that stands out."
    },
    {
      id: 5,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/amjaykqd.json"
        trigger="loop-on-hover"
        delay="250"
        state="hover-conversation-alt"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "80px"
          }
        }> </lord-icon>,
      head: "Website Management",
      para: "Comprehensive website management covering support, maintenance, edits, and upgrades — reliable, fast, and affordable."
    },
    {
      id: 6,
      animatedSvg: <lord-icon target=".card"
        src="https://cdn.lordicon.com/ajfmgpbq.json"
        trigger="loop-on-hover"
        delay="250"
        colors="primary:#00b6ef,secondary:#05e9be"
        style={
          {
            width: "100%",
            height: "100%"
          }
        }> </lord-icon>,
      head: "Social Media Growth & Management",
      para: "Expand your brand or community with strategic social media management and organic growth tactics."
    }
  ]



  return (
    <>
      <section className="bg-[#EEF5F9] pt-0 py-6 sm:py-12 md:pb-6 md:pt-0" id='services'>
        <div className={`${styles.maxWidth} py-12`}>
          <div className="">
            <h1 className={`${styles.sectionHeadText} text-[#00B6EF]`}>Services</h1>
            <p className="text-[#848484] text-base px-6 md:text-lg text-center pt-4">
              Play your best hand by leveraging the services we offer.
            </p>
          </div>

          <div className="mt-8 flex gap-x-2 lg:gap-x-12 gap-y-4 md:gap-y-12 flex-wrap justify-center items-start">
            {CardData.map((cards, index) => (
              <div
                key={index}
                className="cursor-pointer card bg-gradient-to-b mt-4 w-[100%] sm:w-[360px] rounded-xl from-[#B3CDF8] to-[#000210] p-[1px] hover:bg-gradient-to-b hover:from-[#00FFFF] hover:to-[#000210] card-hover lg:mx-0 mx-8 transition-all duration-200 ease-out"
              >
                <div className="bg-white rounded-xl sm:py-0 py-6 px-5 h-full sm:h-[300px] flex flex-col items-center justify-center text-center"
                  onMouseEnter={() => MouseEnter(index)}
                  onMouseLeave={() => MouseLeave(index)}
                >
                  <div
                    className={`w-full h-14 sm:h-[70px] sm:mb-0 flex items-center justify-center`}
                  >
                    {cards.animatedSvg}
                  </div>
                  <div className="pt-3 flex flex-col gap-y-3">
                    <h1 className="work-sans text-xl font-semibold">
                      {cards.head}
                    </h1>
                    <p className="text-base md:text-lg text-[#898989] font-normal w-full">
                      {cards.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
