import {React , useState} from "react";
import CarouselHome from "./Carousel";
function Contact(){
    return(
        <section className="lg:space-y-12 bg-white">
            <div className="cpage pt-60 md:pb-40 relative">
                <div className="test1 border-b-2 tracking-wide border-b-yellow-400 cursor-pointer text-white md:text-4xl italic font-Lora font-bold">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="mx-auto md:max-w-screen-2xl cursor-pointer">
                <div className="grid grid-cols-1 text-justify md:gap-8 lg:grid-cols-3 ">
                    <div className="col-span-2 md:w-full w-screen p-4 space-y-4 lg:space-y-8">
                        <CarouselHome />
                    </div>
                    <div className="p-4 lg:mt-20 space-y-4 lg:space-y-8 lg:text-justify lg:grid justify-center text-center">
                        <div className="">
                            <div className="grid grid-cols-1 p-4 space-y-5">
                                <div>
                                    <span className="text-3xl tracking-wider">See us in person</span>
                                </div>
                                <div className="space-y-3">
                                   <p>We love our customers and welcome them to visit during our normal business hours of 10am to 8pm, Monday through Friday.</p>
                                   <ul className="space-y-2 font-semibold">
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/NAILS+TECH/@39.125234,-76.5347105,15z/data=!4m6!3m5!1s0x89b7feb081c4ffd5:0xc692714eadeeba94!8m2!3d39.125234!4d-76.5347105!16s%2Fg%2F1tlqqwsn?entry=ttu">
                                                Address: 3201 Mountain Rd Suite 111, Pasadena, MD 21122
                                            </a>
                                        </li>
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" href="tel:14104376300">
                                                Phone#: (410) 437-6300
                                            </a>
                                        </li>
                                   </ul>
                                </div>
                                <hr></hr>
                                <div>
                                    <div className="font-semibold text-lg">Business Hours:</div>
                                    <ul className="space-y-4 text-sm mt-4">
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Mon: 9:00 am - 6:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Tues: 9:00 am - 6:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Wed: 9:00 am - 6:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Thrus: 9:00 am - 6:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Fri:  9:00 am - 6:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sat: 9:00 am - 6:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span href="" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sun: Closed
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center">
                <iframe className="w-full md:px-12" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12380.702641314152!2d-76.5347105!3d39.125234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7feb081c4ffd5%3A0xc692714eadeeba94!2sNAILS%20TECH!5e0!3m2!1sen!2sus!4v1695028695275!5m2!1sen!2sus"  height="600" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact;