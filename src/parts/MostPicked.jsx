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
					<div className="max-w-screen-lg w-full mt-5">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl">
							<div className="relative col-span-1 row-span-2 cursor-pointer">
								<img src={accommodations[0].imageUrl} alt="" />
								<div className="absolute w-full h-full rounded-xl inset-0 bg-black opacity-40 transition-opacity duration-500 ease-in-out hover:opacity-10"></div>
								<div className="absolute right-0 top-0 px-12 py-3 bg-brand-primary rounded-tr-xl rounded-bl-xl text-white-white">
									<h1>
										<span className='font-medium'>{accommodations[0].price}$ </span>
										<span className='font-regular'> / night</span>
									</h1>
								</div>
								<div className="absolute bottom-0 left-0 flex-col text-white-white p-5">
									<h1 className='text-lg font-medium'>{accommodations[0].name}</h1>
									<p>{accommodations[0].city}, {accommodations[0].city}</p>
								</div>
							</div>
							{
								accommodations.map((accommodation, index) =>
									<div key={accommodation._id}  className={`relative ${index===0 ? 'hidden': 'col-span1'} cursor-pointer`}>
										<img src={accommodation.imageUrl} className='w-full h-full' alt="tes" />
										<div className="absolute w-full h-full rounded-xl inset-0 bg-black opacity-40 transition-opacity duration-500 ease-in-out hover:opacity-10"></div>
										<div className="absolute right-0 top-0 px-8 py-2 bg-brand-primary rounded-tr-xl rounded-bl-xl text-white-white">
											<h1>
												<span className='font-medium'>{accommodation.price}$  </span>
												<span className='font-regular'> / night</span>
											</h1>
										</div>
										<div className="absolute bottom-0 left-0 flex-col text-white-white p-4">
											<h1 className='text-md lg:text-lg font-medium'>{accommodation.name}</h1>
											<p>{accommodation.city}, {accommodation.city}</p>
										</div>
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
