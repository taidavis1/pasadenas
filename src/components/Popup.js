// src/Popup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
	const AppointmentBtn = (e) => {
        e.preventDefault();
        window.open("https://www.lldtek.com/salon/appt/NTU1NDB8bmFpbHN0ZWNoODh8TURfMDg1Mzh8ZDQ3YmQ2OTJjMzVmYWIzZDgzOTllMjBjNzUyMjhkYmI=" , '_blank');
    };
    return (
		<div className={`${!isOpen? "opacity-100" : "hidden" } fixed left-0 top-0 inset-0 z-50 flex h-full w-full px-2 items-center justify-center bg-black bg-opacity-50 py-10`}>
			<div className="w-full max-w-4xl overflow-y-auto sm:rounded-2xl bg-bgpop bg-cover bg-no-repeat">
				<div className='text-end'>
					<button className = " mr-5 mt-4" onClick={ () => setIsOpen(!isOpen)}>
						<FontAwesomeIcon className=' text-3xl text-green-100' icon={faXmark} />
					</button>
				</div>
				<div className="w-full px-4">
					<div className=" p-12 md:p-36 mx-auto">
						<div className=" space-y-2 md:space-y-4">
							<p className="text-center text-white text-2xl md:text-4xl font-Roboto font-extrabold">
								We open on Sunday 12/24
							</p>
							<p className="text-white font-Poppins font-bold text-xl md:text-3xl text-center">
								10 : 00 AM - 7 : 00 PM
							</p>
							<p className="text-center text-white text-xl md:text-4xl font-Roboto font-extrabold">
								And close on Monday for Christmas
							</p>
							<p className=" text-white font-bold text-md md:text-xl lg:text-xl font-Poppins text-center">
								Our regular hours will resume after that
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Popup;