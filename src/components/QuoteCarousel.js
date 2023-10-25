import React , {useEffect} from "react";
import {Carousel , initTE} from "tw-elements"
function QuoteCarousel (){
    useEffect (() => {
        initTE({Carousel});
    },[]);
    return (
        <div id="QuoteCarousel" className="p-4" data-te-carousel-init data-te-ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[200ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
                    <div className="flex justify-center italic">
                        <ul className=" text-white space-y-2 font-light">
                            <li>
                                <h2 className="text-lg md:text-xl tracking-wide">YOU CAN'T BUY HAPPINESS</h2>
                            </li>
                            <li>
                                <h2 className="text-lg md:text-xl tracking-wide italic">BUT YOU CAN BUY NAIL ART AND THAT'S</h2>
                            </li>
                            <li>
                                <h2 className="text-lg md:text-xl tracking-wide">BASICALLY THE SAME THING!</h2>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[200ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
                    <div className="flex justify-center italic">
                        <ul className=" text-white space-y-2 font-light uppercase">
                            <li>
                                <h2 className="text-lg md:text-xl tracking-wide">Be Shiny, Be Beautiful, Extravagant,</h2>
                            </li>
                            <li>
                                <h2 className="text-lg md:text-xl tracking-wide italic">Friendly Nail Service</h2>
                            </li>
                            <li>
                                <h2 className="text-lg md:text-xl tracking-wide"> at an Affordable Price</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default QuoteCarousel;