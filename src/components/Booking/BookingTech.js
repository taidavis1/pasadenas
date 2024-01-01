import React, { useContext } from "react";
import { TechContext } from "./BookingMain";
import { Link } from "react-router-dom";
export default function BookingTech() {
    const TechnicianName = [
        {
            index: 1,
            name : "Selena",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/2.png")
        },
        {
            index: 2,
            name : "Many",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/4.png")
        },
        {
            index: 3,
            name : "Dorey",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/3.png")
        },
        {
            index: 4,
            name : "Peter",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/1.png")
        },
        {
            index: 5,
            name : "Nyomia",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/5.png")
        },
        {
            index: 6,
            name : "CCFEE",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/6.png")
        },
        {
            index: 7,
            name : "Tip",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/7.png")
        },
        {
            index: 8,
            name : "Random",
            checkmark :  require("../../img/checkmark.png"),
            img : require("../../img/nail-tech/8.png")
        }
    ];

    const { tech, pageid, techclick, days } = useContext(TechContext);
    const [TechName, setTechName] = tech;
    const [PageId, SetPageId] = pageid;
    const [IsTechClick, setIsTechClick] = techclick;
    const [day, Setday] = days;

    const handleBtn = (id) => {
        setIsTechClick((lastClick) => ({
            [id]: !lastClick[id],
        }));
        if (!IsTechClick[id]) {
            if (TechnicianName[id-1].name === 'Random'){
                if (day === 'Mon'){
                    const fill_arr = TechnicianName.filter(item => !item.name.includes('Peter') && !item.name.includes('Random'));
                    const randomIndex = Math.floor(Math.random() * fill_arr.length);
                    setTechName(fill_arr[randomIndex].name);
                }
                else if (day === 'Tues'){
                    const fill_arr = TechnicianName.filter(item => !item.name.includes('Dorey') && !item.name.includes('Random'));
                    const randomIndex = Math.floor(Math.random() * fill_arr.length);
                    setTechName(fill_arr[randomIndex].name);
                }
                else{
                    const fill_arr = TechnicianName.filter(item => !item.name.includes('Random'));
                    const randomIndex = Math.floor(Math.random() * fill_arr.length);
                    setTechName(fill_arr[randomIndex].name);
                }



            }
            else{
                setTechName(TechnicianName[id-1].name);
            }
        }
        else {
            setTechName("");
        }
    };
    return (
        <>
            {SetPageId(3)}
            <div className="lg:py-3 text-center">
                <h1 className="text-2xl lg:text-4xl capitalize italic font-semibold tracking-wider" style={{ fontFamily: 'Tangerine' }}>Choose Your Prefer Technician:</h1>
            </div>
            <hr className="h-1 bg-gradient-to-r border-[#9eccfa]"></hr>
            <div className=" max-w-screen-xl">
                <div className="grid max-w-2xl lg:px-12 grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 text-lg">
                    {TechnicianName.map((tech) => {
                        switch (tech.name) {
                            case "Peter":
                                return (
                                    day !== 'Mon' && (
                                        <Link onClick={() => {handleBtn(tech.index) ; alert("You Choose " + tech.name)}} to="/Booking/info" key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">                                            
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" /> : <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-sky-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </Link>
                                    )
                                )
                            case "Dorey":
                                return (
                                    day !== 'Tues' &&(
                                        <Link onClick={() => {handleBtn(tech.index) ; alert("You Choose " + tech.name)}} to="/Booking/info" key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">                                            
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" /> : <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-pink-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </Link>
                                    )
                                )
                            case 'Random':
                                return (
                                    <Link onClick={() => handleBtn(tech.index)} to="/Booking/info" key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">                                            
                                        <div className="overflow-hidden">
                                            {!IsTechClick[tech.index]? 
                                                <img src={tech.img} alt="#" className="w-full" /> : <img src={tech.checkmark} alt="#" className="w-full" />
                                            }
                                        </div>
                                        <div className="text-center capitalize text-black font-bold tracking-wider">
                                            <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                        </div>
                                    </Link>
                                )
                            default:
                                return (
                                    day !== "Sun" && (
                                        <Link onClick={() => {handleBtn(tech.index) ; alert("You Choose " + tech.name); }} to="/Booking/info" key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">                                            
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" />: <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-pink-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </Link>
                                    )
                                )
                        }
                    })}
                </div>
            </div>
        </>
    );
};