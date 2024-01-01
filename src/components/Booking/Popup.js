// src/Popup.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons"

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handle_click = (id) => {
        props.click(id);
    }
    return (
		<div className={`${!isOpen? "opacity-100" : "hidden" } fixed left-0 top-0 inset-0 z-50 flex h-full w-full px-2 items-center justify-center bg-black bg-opacity-50 py-10`}>
			<div className="w-full max-w-4xl bg-white sm:rounded-2xl ">
				<div className='text-end'>
					<button className = "mr-5 mt-4" onClick={() => handle_click(props.id)}>
						<FontAwesomeIcon className=' text-xl text-black' icon={faXmark} />
					</button>
				</div>
                {!props.confirm? 
                    (
                        <div className="w-full px-4 pt-5 pb-12">
                            <div className='grid gap-4 grid-cols-2'>
                                {props.service_list.map((s, index) => (
                                    <div onClick={() => props.handle_sub(props.id, index)} key={index} className="lg:px-8 lg:py-3 px-4 py-2 cursor-pointer shadow-lg font-semibold tracking-wide text-center border-gray-400 border-2">
                                        <div className="lg:grid lg:grid-cols-3 flex space-x-2">
                                            <span className="col-span-2 lg:whitespace-pre text-gray-500 tracking-wider text-sm lg:text-lg">{s.name}</span>
                                            <div>
                                                {!props.subclick[props.id]?.[index] ? (
                                                    <FontAwesomeIcon className="text-sm lg:text-lg " icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className="text-green-400 w-5 h-5" icon={faCheckCircle} />
                                                )}
                                            </div>
                                        </div>
                                    </div>    
                                ))}    
                            </div>
                        </div>
                    ):(
                        <div className="w-full p-4 pb-12">
                            <div className=' flex space-y-5 flex-col text-center justify-center'>
                                <h3 className='lg:whitespace-pre italic text-gray-600 tracking-wider text-lg lg:text-2xl capitalize'>Do you want to Add More Services?</h3>
                                <div className=' flex space-x-6 text-center justify-center'>
                                    <Link onClick={() => {
                                        props.setConfirm(!props.confirm);
                                    }} 
                                        className=" bg-green-500 rounded-lg shadow-md ease-in-out transition duration-100 
                                        hover:scale-105 text-white text-sm md:text-lg cursor-pointer px-8 py-2 font-serif tracking-wider">
                                        Yes
                                    </Link>
                                    <Link onClick={() => {
                                        alert("You choose " + props.service_val);
                                    }} 
                                        to="/Booking/datetime"
                                        className=" bg-red-500 flex lg:hidden rounded-lg shadow-md ease-in-out transition duration-100 
                                        hover:scale-105 text-white text-sm md:text-lg cursor-pointer px-8 py-2 font-serif tracking-wider">
                                        No
                                    </Link>
                                    <Link
                                        to="/Booking/datetime"
                                        className=" bg-red-500 lg:flex hidden rounded-lg shadow-md ease-in-out transition duration-100 
                                        hover:scale-105 text-white text-sm md:text-lg cursor-pointer px-8 py-2 font-serif tracking-wider">
                                        No
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
			</div>
		</div>
    );
};

export default Popup;