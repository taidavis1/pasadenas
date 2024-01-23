import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ServiceContext } from "./BookingMain";
import ServicesData from "../Data/BookingData";
import {faPlus, faXmark , faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Popup from "./Popup";
export default function BookingServices() {
    const { service, click, pageid, clicksub } = useContext(ServiceContext);
    const [isConfirm , setIsConfirm] = useState(false);
    const [IsClick, setIsClick] = click;
    const [ServiceVal, setServiceVal] = service;
    const [IsSubClick, setIsSubClick] = clicksub;
    const [PageId, SetPageId] = pageid;
    const handleBtn = (id) => {
        setIsConfirm(false);
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));

        // if (IsClick[id]) {
        //     setServiceVal([""]);
        //     setIsSubClick({});
        // }
    };

    const handleSub = (id, index) => {
        setIsSubClick((lastClick) => ({
            ...lastClick,
            [id]: {
                ...lastClick[id],
                [index]: !lastClick[id]?.[index],
            },
        }));

        if (!IsSubClick[id]?.[index]) {
            setIsConfirm(!isConfirm);
            setServiceVal([...ServiceVal, ServicesData[id].service[index].name]);
        }
        else {
            setServiceVal(ServiceVal.filter((service) => service !== ServicesData[id].service[index].name));
        }
    };

    return (
        <>
            {SetPageId(1)}
            <div className="lg:py-3 text-center">
                <h1 className="text-2xl lg:text-4xl capitalize italic font-semibold tracking-wider" style={{ fontFamily: 'Tangerine' }}>What Services Do You Want?</h1>
            </div>
            <hr className="h-0.5 border-[#9eccfa]"></hr>
            <div className="grid lg:grid-cols-2 grid-cols-2 lg:p-4 lg:gap-6 gap-4 justify-items-center">
                {ServicesData.map((ser, id) => (
                    id !== 2 && id !== 9 && id !== 8 &&
                        (
                            <>
                                <div className="w-full cursor-pointer hover:scale-105 ease-in-out transition-all duration-1000 py-3 shadow-lg font-semibold tracking-wide  italic font-Poppins text-center border-gold border-2" 
                                key={id} onClick={() => handleBtn(id)}>
                                    <div className="flex justify-center px-4 lg:grid lg:grid-cols-3">
                                        <span className="tracking-wider text-sm lg:text-lg">{ser.servicename}</span>
                                        <div className="hidden lg:flex lg:flex-col justify-center">
                                            {!IsClick[id] ?
                                                <FontAwesomeIcon className="text-sm lg:text-lg text-yellow-500" icon={faPlus} /> : <FontAwesomeIcon className="text-sm lg:text-lg text-yellow-500" icon={faXmark} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                {IsClick[id] &&(
                                    <Popup service_val = {ServiceVal} confirm = {isConfirm} setConfirm = {setIsConfirm} subclick = {IsSubClick} click = {setIsClick} id = {id} handle_sub = {handleSub} service_list = {ser.service} />
                                )}
                            </>
                        )
                ))}
            </div>
        </>
    );
}