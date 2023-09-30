import {React , useState} from "react";
import Logo from "../img/img-sub/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF , faInstagram , faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faBarsStaggered ,faXmark} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [Click , setClick] = useState(false);
    const [Scroll , SetScroll] = useState(false);
    const Change_color = () => {
        if(window.scrollY >= 10){
            SetScroll(true);
        }
        else{SetScroll(false);}
    };
    window.addEventListener('scroll' , Change_color)
    const Icon_Style = {fontSize: '22',};
    return (
        <div className="">
            <nav className= {Scroll?"bg-white flex justify-between p-4 lg:justify-around lg:py-4 shadow-md w-full fixed top-0 left-0 right-0 z-10 ":"flex text-white justify-between p-4 lg:justify-around lg:py-4 bg-none w-full fixed top-0 left-0 right-0 z-10"}>
                <div className="flex items-center cursor-pointer group">
                    <img src={Logo} alt="" className="w-32 md:w-40 group-hover:opacity-70"/>
                </div>
                <div onClick={() => setClick(!Click)} className={Scroll?"lg:hidden blkock text-3xl cursor-pointer flex items-center text-b;acl": "lg:hidden blkock text-3xl cursor-pointer flex items-center "}>
                {!Click? 
                    <FontAwesomeIcon className="" icon = {faBarsStaggered}/> : 
                    <FontAwesomeIcon className="" icon={faXmark} />
                }
                </div>
                <div className= {Scroll? "lg:flex text-md hidden items-center space-x-12 font-newFont text-xl capitalize text-black" : "lg:flex text-md hidden items-center space-x-12 font-newFont text-xl capitalize" }>
                    <a className="flex t-underline t-underline-black border-b-yellow-500 " href = "/">
                        Home
                    </a>
                    <a className="flex t-underline t-underline-black border-b-yellow-500 transition ease-in-out delay-150 duration-200" href = "/Services">
                        Services
                    </a>
                    <a className="flex t-underline t-underline-black border-b-yellow-500  transition ease-in-out delay-150 duration-200" href = "/Gallery">
                        Gallery
                    </a>
                    <a className="flex t-underline t-underline-black border-b-yellow-500  transition ease-in-out delay-150 duration-200" href = "/Contact">
                        Contact Us
                    </a>
                </div>
                <div className = {Scroll? "hidden lg:flex items-center space-x-12 text-black": "hidden lg:flex items-center space-x-12 text-white"}>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/nailstech.md/">
                        <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=100088194774286">
                        <FontAwesomeIcon className="hover:text-sky-300 transition ease-in-out delay-150 duration-200" style={Icon_Style} icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/NAILS+TECH/@39.125234,-76.5347105,15z/data=!4m6!3m5!1s0x89b7feb081c4ffd5:0xc692714eadeeba94!8m2!3d39.125234!4d-76.5347105!16s%2Fg%2F1tlqqwsn?entry=ttu">
                        <FontAwesomeIcon className="hover:text-green-300" style={Icon_Style} icon={faGoogle}></FontAwesomeIcon>
                    </a>
                    <button onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.lldtek.com/salon/appt/NTU1NDB8bmFpbHN0ZWNoODh8TURfMDg1Mzh8ZDQ3YmQ2OTJjMzVmYWIzZDgzOTllMjBjNzUyMjhkYmI=' , '_blank');
                        }} className= {Scroll? "hover:bg-black group cursor-pointer px-4 py-3 border-black border-2":"hover:bg-white group cursor-pointer px-4 py-3 border-white border-2"}>
                        <a target="_blank" className = {Scroll?"group-hover:text-white tracking-wider":"group-hover:text-black tracking-wider"}>Book Now</a>
                    </button>
                </div>
            </nav>
            {Click?
                <nav className="overflow-hidden space-y-12 md:space-y-24 top-16 md:top-24 fixed p-6 w-screen h-screen bg-white transition duration-700 ease-out lg:hidden left-0 right-0 z-20  mx-auto  text-black">
                    <div className=" space-y-16 md:space-y-24 flex uppercase flex-col text-lg mt-12">
                        <a onClick={() => setClick(!Click)} className="" href="/">Home</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Services">Services</a>
                        <a onClick={() => setClick(!Click)} className=" " href="/Gallery">Gallery</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Contact">Contact us</a>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.lldtek.com/salon/appt/NTU1NDB8bmFpbHN0ZWNoODh8TURfMDg1Mzh8ZDQ3YmQ2OTJjMzVmYWIzZDgzOTllMjBjNzUyMjhkYmI=' , '_blank');
                            }} className="hover:bg-black group  transition ease-out duration-200 cursor-pointer px-4 py-3 border-black border-2 capitalize font-serif tracking-wide">
                            <a className = "group-hover:text-white">Book Now</a>
                        </button>
                    </div>
                    <div className="flex space-x-10 text-2xl justify-center">
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/nailstech.md/">
                            <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200"  icon={faInstagram}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=100088194774286">
                            <FontAwesomeIcon className="hover:text-sky-300 transition ease-in-out delay-150 duration-200"  icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.google.com/maps/place/NAILS+TECH/@39.125234,-76.5347105,15z/data=!4m6!3m5!1s0x89b7feb081c4ffd5:0xc692714eadeeba94!8m2!3d39.125234!4d-76.5347105!16s%2Fg%2F1tlqqwsn?entry=ttu">
                            <FontAwesomeIcon className="hover:text-green-300"  icon={faEnvelope}></FontAwesomeIcon>
                        </a>
                    </div>
                </nav>
                :null
            }
        </div>
    );
};

export default Navbar;