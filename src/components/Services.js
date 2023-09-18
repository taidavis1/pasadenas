import {React , useState} from "react";
import {Fade , Slide} from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark , faPlus} from "@fortawesome/free-solid-svg-icons";
import ServicesData from "./Data/ServicesData";
function Service(){
    const [IsClick , setIsClick] = useState(false);
    const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
    };
    return (
        <section className="space-y-2 pb-5 overflow-hidden lg:space-y-12 bg-black">
            <div className="spage pt-56 md:pb-40 relative">
                <div className="test border-b-2 tracking-wide border-b-yellow-400 cursor-pointer text-white md:text-4xl italic  font-Roboto font-bold">
                    <h2>Our Services</h2>
                </div>
            </div>

            {/* Mobile View */}
            <div className="p-6 space-y-5 md:hidden">
                {ServicesData.map((s) => (
                    <div className="grid grid-cols-1 overflow-auto">
                        <div className="space-y-2">
                            <button className="w-full py-3 shadow-lg font-semibold tracking-wide uppercase text-center bg-gradient-to-r from-orange-600  to-pink-500" key={s.id} onClick={() => handleBtn(s.id)}>
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2 text-white tracking-wider">{s.servicename}</div>
                                        <div>
                                            {!IsClick[s.id]?
                                                <FontAwesomeIcon className="text-white" icon={faPlus} />: <FontAwesomeIcon className="text-white" icon={faXmark} />
                                            }
                                        </div>
                                </div>
                            </button>
                            {IsClick[s.id] && (
                                <div className="">
                                    <Fade delay = {100}>
                                        <div className="p-4 shadow-lg space-y-2 rounded-lg">
                                            <div className="grid p-3 grid-cols-1">
                                                <img src={s.imgPath} alt = {s.servicename} />
                                            </div>
                                            {s.service.map((se , index) => (
                                                <ul className="text-white ml-4 p-2 grid grid-cols-3 list-inside gap-4">
                                                    <div className=" col-span-2">
                                                        <li className="text-xl">{index + 1}. {se.name}</li>
                                                    </div>
                                                    <div>
                                                        <li className=" text-ser-color tracking-wider font-bold">{se.price}</li>
                                                    </div>
                                                </ul>  
                                            ))}
                                        </div>

                                    </Fade>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View */}
            {ServicesData.map((ser) => (
                <div className="md:space-y-12 p-3 hidden md:block">
                    <Slide direction="left" delay={200}>
                        <div key={ser.index} className="flex justify-center">
                            <div className="bg-gradient-to-r from-orange-600  to-pink-500  px-12 py-3">
                                <h1 className="tracking-wide capitalize cursor-pointer italic text-white md:text-4xl font-bold">{ser.servicename}</h1>
                            </div>
                        </div>
                        <div className="p-4 mx-auto max-w-screen-xl cursor-pointer">
                            <div className={(() => {
                                switch (ser.servicename){
                                    case 'Manicure':
                                        case 'Additional Extra':
                                            case 'Little Angel':
                                                case 'Repairs':
                                                    case 'Eyelash Extension':
                                                        return "space-y-8 md:grid-cols-2 grid lg:grid-cols-3 gap-x-4 gap-y-3 lg:space-y-0"
                                    case 'Pedicure':
                                        case 'Polish Change':
                                            case 'Full Sets':
                                                case 'Fill':
                                                    case 'Drinks Menu':
                                                    return "space-y-8 md:grid-cols-2 grid lg:grid-cols-4 gap-x-5 gap-y-3 lg:space-y-0"
                                    case 'Apres Gel-X':
                                        case 'Spa Packages':
                                            return "space-y-8 md:grid-cols-2 grid lg:grid-cols-6 gap-x-6 gap-y-3 lg:space-y-0"
                                    case 'Extra':
                                        return "space-y-8 md:grid-cols-2 grid lg:grid-cols-5 gap-x-4 gap-y-3 lg:space-y-0"
                                    case 'Waxing':
                                        return "space-y-8 md:grid-cols-2 grid lg:grid-cols-6 gap-x-4 gap-y-3 lg:space-y-0"   
                                }
                            })()}>
                                {ser.service.map((s , index) => (
                                    <div key={index} className={(() => {
                                        switch (ser.servicename){
                                            case 'Apres Gel-X':
                                                case 'Spa Packages':
                                                    return 'shadow-lg  lg:col-span-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105'
                                            default:
                                                return 'max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105'
                                        }
                                        })()}>
                                        <div className="overflow-hidden">
                                            {(() => {
                                                switch (ser.servicename){
                                                    case 'Extra':
                                                        case 'Waxing':
                                                            case 'Repairs':
                                                            return null
                                                    default:
                                                        return <img src={s.imgUrl} alt="#" className="w-full"/>
                                                }
                                            })()}
                                        </div>
                                        <div className="text-center px-6 py-2 space-y-2 mb-4 text-white">
                                            <h1 className="md:text-lg capitalize font-Gruppo border-b-2 py-1 border-yellow-500/80">{s.name}</h1>
                                            <div className="text-xl space-y-2">
                                                {s.price}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr className="mt-4"></hr>
                        </div>
                    </Slide>
                </div>
            ))}
        </section>
    );
;}

export default Service;
