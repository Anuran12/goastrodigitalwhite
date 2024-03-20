import React from 'react'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import bgDrop from "../../assets/bg-grade.svg";

export default function Hero() {

    const btnStyles = ["relative text-white w-full md:w-[300px] h-[60px] flex items-center justify-center overflow-hidden rounded-full work-sans text-base md:text-lg md:font-medium font-light duration-200 ease-in-out transition-all"]

    return (

        <>
            <section className='lg:h-[650px] bg-image w-full work-sans relative' id='home'>
                <div className='overflow-hidden w-full'>
                    {/* <div className='linear-shade absolute -top-[50px] md:-top-[400px] md:left-1/2 -translate-x-1/2'></div>
                    <div className='lg:block hidden linear-shade absolute md:-top-[700px] md:left-1/2 left-[150px] -top-[200px] -translate-x-[10%]'></div> */}
                    <img src={bgDrop} alt="Nothing" className='absolute left-0 top-0 md:left-[58%] -translate-x-1/2 md:-top-28 md:w-auto overflow-hidden' />
                </div>

                <div className={`${styles.maxWidth} text-white h-full flex lg:items-center justify-center z-[1] relative lg:mt-0 mt-32 md:mt-40 lg:mb-0 md:mb-32 sm:mb-16`}>
                    <div className='lg:px-0 px-6'>
                        <h1 className={`${styles.heroHeadText} font-bold text-center w-full max-w-[1120px] capitalize `}>
                            We Craft Digital Experiences
                            That <span className='text-light-green'>Resonate</span> and <span className='text-neal-blue'>Convert</span>
                        </h1>
                        <p className={`text-base font-light md:text-lg md:font-normal w-full pt-6 max-w-[680px] text-center m-auto`}>
                            Our mission is to empower businesses by enhancing their online presence with innovative, custom-made digital solutions.
                        </p>
                        <div className='flex md:flex-row flex-col gap-y-4 justify-center items-center gap-x-4 mt-8 md:-mb-12 md:mt-12 overflow-hidden'>
                            <Link to="tel:(323) 595-3041" className='w-full md:w-auto'>
                                <button className={`${btnStyles} bg-custom-blue hover:bg-[#0264bf]`}>
                                    <span className='relative z-10'>Call or Text (323) 595-3041</span>
                                </button>
                            </Link>
                            <a href="https://calendly.com/goastrodigital/exploratory-call" target='_blank' className='w-full md:w-auto'>
                                <button className={`${btnStyles} bg-transparent border border-white before:absolute before:h-0 before:w-0 before:rounded-full hover:border-[#0270bf] hover:text-[#0270bf]`}>
                                    <span className='relative z-10'>Schedule a 15 Minute Call</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}
