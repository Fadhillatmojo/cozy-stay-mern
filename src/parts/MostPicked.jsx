import React from 'react'
import {Fade} from 'react-reveal'

export default function MostPicked(props) {
	const accommodations = props.dataMostPicked;
	return (
		<div className='bg-white w-full px-2 flex justify-center mt-20 md:mt-24 py-10'>
			<Fade bottom>
				<div className="flex-col">
					<h1 className=' font-medium text-xl md:text-2xl'>
						Most Picked
					</h1>
					<div className="max-w-screen-lg w-full">
						<div className="grid grid-cols-3 gap-4 rounded-xl">
						<div className="relative col-span-1 row-span-2">
								<img src={accommodations[0].imageUrl} alt="" />
								<div className="absolute w-full h-full rounded-xl inset-0 bg-black opacity-20 transition-opacity duration-500 ease-in-out hover:opacity-10"></div>
							</div>
							{
								accommodations.map((accommodation, index) =>
									<div key={accommodation._id}  className={`relative ${index===0 ? 'hidden': 'col-span1'}`}>
										<img src={accommodation.imageUrl} className='w-full h-full' alt="tes" />
										<div className="absolute w-full h-full rounded-xl inset-0 bg-black opacity-20 transition-opacity duration-500 ease-in-out hover:opacity-10"></div>
									</div>
								)
							}
						</div>
					</div>
				</div>
			</Fade>

		</div>
	)
}
