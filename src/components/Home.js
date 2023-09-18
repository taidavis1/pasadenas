import {React , useState , useEffect} from "react";
import {Fade , Slide} from "react-awesome-reveal";
import manicure from "../img/img-sub/manicure.jpg";
import pedicure from "../img/img-sub/pedicure.jpg";
import polish from "../img/img-sub/polish-change.jpg";
import waxing from "../img/img-sub/wax.jpg";
import eyelash from "../img/img-sub/eye-lash.jpg"
import user_data from "./Data/ReviewData";
import Ann from "../img/img-sub/girl.jpg";
import CarouselHome from "./Carousel";
function importImg(r){
    return r.keys().map(r);
}
function Home(){
    const fnames = importImg(require.context('../img/img-nail/img-new/' , false , /\.(png|jpg|jpeg)$/));
    return (
        <section className="relative overflow-x-hidden space-y-6">
            <div className="hpage w-screen h-screen relative">
                <Fade cascade delay={150}>
                    <div className="test w-full px-3 md:w-1/2 py-5 space-y-3 lg:py-8 md:space-y-6 text-center  bg-black/10 block shadow-md shadow-black">
                        <div className="">
                            <h1 className="text-2xl text-yellow-100 md:text-5xl font-Monterast tracking-widest whitespace-nowrap font-extrabold italic">Nails Tech</h1>
                        </div>
                        <div className="flex justify-center ">
                            <ul className=" text-black space-y-2 font-extrabold ">
                                <li>
                                    <h2 className="text-sm md:text-xl tracking-wide">YOU CAN'T BUY HAPPINESS</h2>
                                </li>
                                <li>
                                    <h2 className="text-sm md:text-xl tracking-wide italic">BUT YOU CAN BUY NAIL ART AND THAT'S</h2>
                                </li>
                                <li>
                                    <h2 className="text-sm md:text-xl tracking-wide">BASICALLY THE SAME THING!</h2>
                                </li>
                            </ul>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.lldtek.com/salon/appt/NTU1NDB8bmFpbHN0ZWNoODh8TURfMDg1Mzh8ZDQ3YmQ2OTJjMzVmYWIzZDgzOTllMjBjNzUyMjhkYmI=' , '_blank');
                        }} className="hover:bg-black uppercase md:text-lg text-sm py-2 px-4 group cursor-pointer md:px-12 border-black border-2 font-serif md:tracking-wide">
                            <a className = "group-hover:text-white ">Book Appointment</a>
                        </button>
                    </div>
                </Fade>
            </div>
            <div className="p-6 mx-auto bg-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CarouselHome />
                    <Slide direction="right" delay={200}>
                        <div className="items-center text-white md:mt-8 flex flex-col md:space-y-8 space-y-3 tracking-wider">
                            <div>
                                <h1 className = "border-b-2 border-white/80 text-lg italic font-Monterast text-yellow-200 md:text-4xl capitalize font-bold">Who we are ?</h1>
                            </div>
                            <div className="md:w-3/4 text-center text-sm md:text-lg ">
                                <h2 className="">Nails Tech is a premier nail and spa salon in Pasadenas that offers a wide variety of nail services for men and women. Our team of highly trained and experienced technicians use only the highest quality products to create beautiful, long-lasting nails. We are committed to providing our clients with a luxurious and relaxing experience, from the moment they walk in the door to the moment they leave.</h2>
                            </div>
                            <div className="md:w-3/4 text-center  text-sm md:text-lg ">
                                <h2>
                                    Our mission is to be the go-to nail and spa salon for those who want to unwind and rejuvenate. We are committed to providing the highest quality service and sanitation, and our technicians are constantly being trained to bring you the latest trends and techniques.
                                </h2>
                            </div>
                            <div className="flex flex-col text-center space-y-1 md:space-y-4">
                                <div>
                                    <h1 className="font-Han-Sans tracking-wider text-lg md:text-2xl italic">Location :</h1>
                                </div>
                                <div className="text-md md:text-lg font-Roboto t-underline t-underline-black ">
                                    <a className="text-sky-300 md:text-yellow-200" target="_blank"  rel="noreferrer" href="https://www.google.com/maps/dir//NAILS+TECH,+3201+Mountain+Rd+Suite+111,+Pasadena,+MD+21122/@39.125234,-76.5347105,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7feb081c4ffd5:0xc692714eadeeba94!2m2!1d-76.5347105!2d39.125234?entry=ttu">
                                        NAILS TECH, 3201 Mountain Rd Suite 111, Pasadena, MD 21122
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <Fade triggerOnce delay={500} direction="left">
                <div className="bg-white p-8 lg:px-28 relative space-y-7 lg:space-y-12">
                    <div className="flex justify-center text-lg lg:text-4xl">
                        <h1 className = "border-b-2 border-yellow-500/80 text-lg italic font-Monterast text-black md:text-4xl capitalize font-bold">What we Do ?</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-2 lg:gap-y-10 lg:gap-x-5 cursor-pointer">
                        <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                            <div className="overflow-hidden">
                                <img src={manicure} alt="#" className="w-full" />
                            </div>
                            <div className="text-center px-6 py-4 space-y-2 mb-4">
                                <h1 className=" md:text-xl uppercase font-serif border-b-2 border-yellow-500/80">Manicure</h1>
                                <ul className=" text-md space-y-2  list-disc list-inside">
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
                            <div className="text-center space-y-2 px-6 py-4 mb-4">
                                <h1 className="font-serif md:text-xl uppercase border-b-2 border-yellow-500/80">Pedicure</h1>
                                <ul className="text-md space-y-2 list-disc list-inside">
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
                            <div className="text-center space-y-2 px-6 py-4 mb-4">
                                <h1 className="font-serif md:text-xl uppercase border-b-2 border-yellow-500/80">Polish Change</h1>
                                <ul className=" text-md space-y-2 list-disc list-inside">
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
                            <div className="text-center space-y-2 px-6 py-4 mb-4">
                                <h1 className="font-serif md:text-xl uppercase border-b-2 border-yellow-500/80">Waxing</h1>
                                <ul className="text-md space-y-2  list-disc list-inside">
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
                                <h1 className="font-serif md:text-xl uppercase border-b-2 border-yellow-500/80">Eyelash Extension</h1>
                                <ul className=" text-md space-y-2 list-disc list-inside">
                                    <li>Enhance your natural beauty with our eyelash extension services.</li>
                                    <li>Our skilled technicians offer a range of eyelash styles and lengths to choose from, allowing you to achieve the perfect look for your eyes.</li>
                                    <li>Indulge in the art of eyelash extensions, and let us create a stunning, long-lasting result that will leave you feeling confident and glamorous.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="shadow-md text-sm hover:bg-black ease-in-out transition  duration-100 hover:scale-105 md:text-2xl group cursor-pointer px-4 md:px-16 py-2 border-black border-2 uppercase font-serif tracking-wide">
                            <a href="/Services" className="group-hover:text-white font-Poppins">View More Services!</a>
                        </button>
                    </div>
                </div>
            </Fade>
            <Fade triggerOnce delay={500} direction="left">
                <div className="bg-black p-8 lg:px-28 relative space-y-7 lg:space-y-12">
                    <div className="flex justify-center text-lg lg:text-4xl">
                        <h1 className = "border-b-2 border-white-500/80 text-2xl italic font-Monterast text-yellow-200 md:text-4xl capitalize font-bold">Our Customer Reviews</h1>
                    </div>
                    <div class="grid border-none gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
                        {user_data.map((people ,) => (
                            <div key={people.id}>
                                <div class="cursor-pointer ease-in-out transition-all duration-1000 lg:hover:opacity-70 block rounded-lg border-none bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                    <div class="h-16 overflow-hidden !bg-black"></div>
                                    <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                        <img src={Ann} />
                                    </div>
                                    <div class="p-6 space-y-4">
                                        <h4 class="mb-4 text-2xl font-semibold">{people.name}</h4>
                                        <hr />
                                        <p class="mt-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="inline-block h-7 w-7 pr-2"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                            </svg>
                                            {people.review}
                                        </p>
                                        <div className="flex justify-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="pink"
                                                className="mr-1 h-5 w-5 text-danger">
                                                <path
                                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="pink"
                                                className="mr-1 h-5 w-5 text-danger">
                                                <path
                                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="pink"
                                                className="mr-1 h-5 w-5 text-danger">
                                                <path
                                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="pink"
                                                className="mr-1 h-5 w-5 text-danger">
                                                <path
                                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="pink"
                                                className="mr-1 h-5 w-5 text-danger">
                                                <path
                                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}                 
                    </div>
                </div>
            </Fade>
            <Slide delay={500} duration={500} triggerOnce direction="left">
                <div className="bg-white grid place-items-center pt-5 relative space-y-4">
                    <div className="flex justify-center text-lg lg:text-4xl ">
                        <h1 className="border-b-2 border-yellow-500/80 text-lg italic font-Monterast text-black md:text-4xl capitalize font-bold">Gallery</h1>
                    </div>
                    <div className="grid max-w-screen-xl lg:grid-cols-3 gap-5 md:grid-2 justify-items-center p-4 cursor-pointer">
                        {fnames.slice(0,6).map((fname , index) =>(
                            <div key={index} className="shadow-lg overflow-hidden max-w-sm">
                                <img className="w-full opacity-80 hover:opacity-100 ease-in-out transition-all duration-1000 hover:scale-125" src={fname} alt={fname}/>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pb-4">
                        <button className="shadow-md  hover:bg-black ease-in-out transition  duration-100 hover:scale-105 text-sm md:text-2xl group cursor-pointer px-4 md:px-16 py-2 border-black border-2 uppercase font-serif tracking-wide">
                            <a href="/Gallery" className="group-hover:text-white font-Poppins">More Photos </a>
                        </button>
                    </div>
                </div>
            </Slide>              
        </section>
    );
};
export default Home;