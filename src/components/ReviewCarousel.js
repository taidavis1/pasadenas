import React , {useEffect} from "react";
import {Carousel , initTE} from "tw-elements"
import user_data from "./Data/ReviewData";
function ReviewCarousel (){
    useEffect (() => {
        initTE({Carousel});
    },[]);
    return (
        <div id="ReviewCarousel" className="p-4" data-te-carousel-init data-te-ride="carousel">
            <div className="absolute inset-x-0 bottom-0  mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="0" data-te-carousel-active className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="1" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 2"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="2" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 3"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="3" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 4"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="4" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 5"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="5" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 6"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="6" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 7"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="7" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 8"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="8" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 9"></button>
                <button type="button" data-te-target="#ReviewCarousel" data-te-slide-to="9" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 10"></button>
            </div>
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {user_data.map((people ,) => {
                    switch ( people.id){
                        case 1:
                            return <div key={people.id} className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[200ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
                                        <div className=" flex lg:px-12 flex-col text-center justify-center">
                                            <h4 className="mb-4 text-4xl font-semibold font-Lora">{people.name}</h4>
                                                <p className="mt-4 text-2xl lg:mx-32 text-blue-test">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        className="inline-block h-7 w-7 pr-2"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                                    </svg>
                                                    {people.review}
                                                </p>
                                        </div>
                                    </div>
                        default: 
                            return <div key={people.id} className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
                                <div className=" flex lg:px-12 flex-col text-center justify-center">
                                    <h4 className="mb-4 text-4xl font-semibold font-Lora">{people.name}</h4>
                                        <p className="mt-4 text-2xl lg:mx-32 text-blue-test">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="inline-block h-7 w-7 pr-2"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                            </svg>
                                            {people.review}
                                        </p>
                                </div>
                            </div>
                    }
                })}
            </div>
            <button className="absolute hidden md:flex bottom-0 left-0 top-0 z-[1]  w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black  transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]   focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#ReviewCarousel" data-te-slide="prev">
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <button className="absolute hidden md:flex bottom-0 right-0 top-0 z-[1]  w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]  motion-reduce:transition-none" type="button" data-te-target="#ReviewCarousel" data-te-slide="next">
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
             </button>
        </div>
    );
};
export default ReviewCarousel;