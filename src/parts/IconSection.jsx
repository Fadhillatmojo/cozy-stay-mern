import React from 'react'
import bagIcon from '../assets/icon/bagicon.svg'
import cameraIcon from '../assets/icon/cameraicon.svg'
import locationIcon from '../assets/icon/locationicon.svg'
import {Fade} from 'react-reveal'

export default function IconSection() {
	const iconItems = [
		{id: 1, icon: bagIcon, amount: '80K+', desc: 'Travellers'},
		{id: 2, icon: cameraIcon, amount: '300+', desc: 'Treasures'},
		{id: 3, icon: locationIcon, amount: '1.5K+', desc: 'World Cities'},
	];

	return (
		<section className='bg-white-secondaryWhite w-full px-2 flex justify-center mt-10 md:mt-12 py-10'>
			<div className="max-w-screen-lg flex md:flex-row">
				<Fade left>
					<div className="grid grid-cols-1 md:grid-cols-3">
						{
							iconItems.map(item => 
							<div key={item.id} className="flex flex-col md:flex-row justify-center md:justify-start items-center">
								<img src={item.icon} alt="icon" className='md:w-1/2'/>
								<div className="flex flex-col text-center md:text-left -mt-6 md:-mt-0 md:-ms-2 lg:-ms-3">
									<h1 className='text-3xl font-medium'>
										{item.amount}
									</h1>
									<p className='text-xl font-medium'>
										{item.desc}
									</p>
								</div>
							</div>
							)
						}
					</div>
				</Fade>
				

			</div>
		</section>
	)
}
