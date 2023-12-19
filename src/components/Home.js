import {React , useState , useEffect} from "react";
import {Fade , Slide} from "react-awesome-reveal";
import manicure from "../img/img-sub/manicure.jpg";
import pedicure from "../img/img-sub/pedicure.jpg";
import polish from "../img/img-sub/polish-change.jpg";
import waxing from "../img/img-sub/wax.jpg";
import eyelash from "../img/img-sub/eye-lash.jpg"
import ReviewCarousel from "./ReviewCarousel";
import CarouselHome from "./Carousel";
import QuoteCarousel from "./QuoteCarousel";
import Popup from "../components/Popup";
function importImg(r){
    return r.keys().map(r);
}
function Home(){
    const fnames = importImg(require.context('../img/img-nail/img-new/' , false , /\.(png|jpg|jpeg)$/));
    return (
        <>
            <Popup />
            <section className="relative overflow-x-hidden space-y-2 lg:space-y-8">
                <div className="w-screen bg-pageb lg:bg-pagel bg-no-repeat lg:bg-center bg-cover h-screen relative">
                    <Fade cascade delay={150}>
                        <div className="absolute lg:top-1/3 lg:right-12 top-1/3 w-full px-3 py-5 space-y-5 lg:py-8 md:space-y-6 text-center">
                            <div className="">
                                <h1 className="text-4xl ml-4 text-orange-300 md:text-6xl tracking-widest whitespace-nowrap font-Lora font-extrabold">Nails Tech</h1>
                            </div>
                            <QuoteCarousel />
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.lldtek.com/salon/appt/NTU1NDB8bmFpbHN0ZWNoODh8TURfMDg1Mzh8ZDQ3YmQ2OTJjMzVmYWIzZDgzOTllMjBjNzUyMjhkYmI=' , '_blank');
                            }} className="hover:bg-white rounded-full md:text-xl text-white text-lg py-3 px-4 group cursor-pointer md:px-12 bg-[#3C6CA8] md:tracking-wide">
                                <a className = "group-hover:text-[#3C6CA8] font-extrabold">Book Appointment</a>
                            </button>
                        </div>
                    </Fade>
                </div>
                <div className="p-6 mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <CarouselHome />
                        <Slide direction="right" delay={200}>
                            <div className="items-center  text-black md:mt-8 flex flex-col md:space-y-8 space-y-5 tracking-wider">
                                <div>
                                    <h1 className = "border-b-2 font-Lora border-white/80 lg:mt-24 text-3xl italic text-orange-300 md:text-6xl capitalize font-bold">Who we are ?</h1>
                                </div>
                                <div className="md:w-3/4 text-black italic text-center text-lg md:text-2xl ">
                                    <h2 className="">Nails Tech is a premier nail and spa salon in Pasadenas that offers a wide variety of nail services for men and women. Our team of highly trained and experienced technicians use only the highest quality products to create beautiful, long-lasting nails. We are committed to providing our clients with a luxurious and relaxing experience, from the moment they walk in the door to the moment they leave.</h2>
                                </div>
                                <div className="flex flex-col text-center space-y-1 md:space-y-4">
                                    <div>
                                        <h1 className="tracking-wider text-orange-300 font-lato text-2xl md:text-4xl italic">Location :</h1>
                                    </div>
                                    <div className="text-lg md:text-2xl t-underline t-underline-black ">
                                        <a className="text-black underline md:no-underline" target="_blank"  rel="noreferrer" href="https://www.google.com/maps/dir//NAILS+TECH,+3201+Mountain+Rd+Suite+111,+Pasadena,+MD+21122/@39.125234,-76.5347105,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7feb081c4ffd5:0xc692714eadeeba94!2m2!1d-76.5347105!2d39.125234?entry=ttu">
                                            3201 Mountain Rd Suite 111, Pasadena, MD 21122
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
                <Fade triggerOnce delay={500} direction="left">
                    <div className=" p-4 bg-paget bg-center bg-no-repeat bg-cover lg:px-28 relative space-y-7 lg:space-y-12">
                        <div className="flex justify-center lg:text-4xl">
                            <h1 className = "text-3xl italic text-orange-300 md:text-6xl capitalize font-bold">What we Do ?</h1>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-2 lg:gap-y-10 lg:gap-x-5 cursor-pointer">
                            <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                <div className="overflow-hidden">
                                    <img src={manicure} alt="#" className="w-full" />
                                </div>
                                <div className="text-center px-6 py-4 space-y-4 mb-4">
                                    <h1 className=" text-lg md:text-xl text-[#3C6CA8] uppercase border-b-2 font-semibold border-yellow-500/80">Manicure</h1>
                                    <ul className=" text-md font-bold space-y-2  list-disc list-inside">
                                        <li>Our manicure services will leave your nails looking and feeling their best</li>
                                        <li>We offer a variety of manicure options to choose from, so you can find the perfect one for your needs</li>
                                        <li>Our experienced nail technicians will take the time to pamper your hands and nails, leaving you feeling relaxed and confident.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                <div className="overflow-hidden">
                                    <img src={pedicure} alt="#" className="w-full" />
                                </div>
                                <div className="text-center px-6 py-4 space-y-4 mb-4">
                                    <h1  className="text-lg md:text-xl text-[#3C6CA8] uppercase border-b-2 font-semibold border-yellow-500/80">Pedicure</h1>
                                    <ul className=" text-md font-bold space-y-2  list-disc list-inside">
                                        <li>Our pedicure services will leave your feet and toes feeling refreshed and rejuvenated</li>
                                        <li>We offer a variety of pedicure options to choose from, so you can find the perfect one for your needs.</li>
                                        <li>Our experienced nail technicians will take the time to pamper your feet, leaving you feeling relaxed and confident.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                <div className="overflow-hidden">
                                    <img src={polish} alt="#" className="w-full" />
                                </div>
                                <div className="text-center px-6 py-4 space-y-4 mb-4">
                                    <h1  className="text-lg md:text-xl text-[#3C6CA8] uppercase border-b-2 font-semibold border-yellow-500/80">Polish Change</h1>
                                    <ul className=" text-md font-bold space-y-2  list-disc list-inside">
                                        <li>Our nail polish change services will leave your nails looking and feeling their best.</li>
                                        <li>We offer a wide variety of nail polish colors and styles to choose from, so you can find the perfect one for your preferences.</li>
                                        <li>Our experienced nail technicians will take the time to pamper your nails and ensure they look absolutely fabulous.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                <div className="overflow-hidden">
                                    <img src={waxing} alt="#" className="w-full" />
                                </div>
                                <div className="text-center px-6 py-4 space-y-4 mb-4">
                                    <h1  className="text-lg md:text-xl text-[#3C6CA8] uppercase border-b-2 font-semibold border-yellow-500/80">Waxing</h1>
                                    <ul className=" text-md font-bold space-y-2  list-disc list-inside">
                                        <li>Our waxing services will leave you with smooth, hair-free skin that you'll love.</li>
                                        <li>We offer a variety of waxing options to choose from, so you can find the perfect one for your needs.</li>
                                        <li>Our experienced technicians will take the time to make you feel comfortable and relaxed, and our results will last for weeks.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="max-w-sm md:col-span-2 lg:col-span-4 shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                <div className="overflow-hidden">
                                    <img src={eyelash} alt="#" className="w-full" />
                                </div>
                                <div className="text-center space-y-2 px-6 py-4 mb-4">
                                    <h1  className="text-lg md:text-xl text-[#3C6CA8] uppercase border-b-2 font-semibold border-yellow-500/80">Eyelash Extension</h1>
                                    <ul className=" text-md font-bold space-y-2  list-disc list-inside">
                                        <li>Enhance your natural beauty with our eyelash extension services.</li>
                                        <li>Our skilled technicians offer a range of eyelash styles and lengths to choose from, allowing you to achieve the perfect look for your eyes.</li>
                                        <li>Indulge in the art of eyelash extensions, and let us create a stunning, long-lasting result that will leave you feeling confident and glamorous.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="shadow-md italic border-black text-black hover:bg-black ease-in-out transition duration-100 hover:scale-105 md:text-2xl group cursor-pointer px-4 md:px-16 py-2 border-2 tracking-wide">
                                <a href="/Services" className="group-hover:text-white text-lg">View More Services!</a>
                            </button>
                        </div>
                    </div>
                </Fade>
                <Fade triggerOnce delay={500} direction="left">
                    <div className="p-8  bg-[#fafafa] lg:px-28 relative space-y-7 lg:space-y-12">
                        <div className="flex justify-center text-lg lg:text-4xl">
                            <h1 className = "border-b-2 font-Lora  border-white/80 text-2xl italic text-orange-300 md:text-4xl capitalize font-bold">Our Customer Reviews</h1>
                        </div>
                        <div>
                            <ReviewCarousel />
                        </div>
                    </div>
                </Fade>
                <Slide delay={500} duration={500} triggerOnce direction="left">
                    <div className="bg-[#ddd2cf]/50 -mt-2 px-5 lg:-mt-8 py-10 grid place-items-center relative space-y-5 md:space-y-12">
                        <div className="flex justify-center text-lg lg:text-4xl ">
                            <h1 className="text-3xl font-Lora italic text-orange-300 md:text-6xl capitalize font-bold ">Gallery</h1>
                        </div>
                        <div className="grid max-w-screen-xl lg:grid-cols-3 gap-5 md:grid-cols-2 justify-items-center p-4 cursor-pointer">
                            {fnames.slice(0,6).map((fname , index) =>(
                                <div key={index} className="shadow-lg overflow-hidden rounded-lg">
                                    <img className="w-full ease-in-out transition-all duration-1000 hover:scale-125" src={fname} alt={fname}/>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center pb-4">
                            <button className="shadow-md bg-[#EAB2BB] hover:bg-[#EAB2BB] text-white ease-in-out transition  duration-100 hover:scale-105  md:text-2xl group cursor-pointer px-4 md:px-16 py-2  capitalize font-Lora tracking-wide">
                                <a href="/Gallery" className="text-lg">More Photos </a>
                            </button>
                        </div>
                    </div>
                </Slide>              
            </section>
        </>
    );
};
export default Home;