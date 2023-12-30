// src/Popup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons"

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handle_click = (id) => {
        setIsOpen(!isOpen);
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
			</div>
		</div>
    );
};

export default Popup;