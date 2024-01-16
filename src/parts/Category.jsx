import React from 'react'
import {Fade} from 'react-reveal'

export default function Category(props) {
	const categories = props.dataCategories;

  return (
		<div className="bg-white w-full px-2 flex justify-center py-5 md:py-10">
			<Fade bottom>
				<div className="max-w-screen-lg w-full flex-col space-y-12">
					{
						categories.map(category =>
							// div untuk per kategory
							<div key={category._id} className="flex-col">
								<h1 className='font-medium text-xl md:text-2xl'>{category.name}</h1>

								{/* div class card */}
								<div className='flex flex-col md:flex-row justify-between mt-5 space-y-5 md:space-y-0 md:space-x-7'>
									{
										category.items.map( item =>
											<div key={item._id} className='group rounded-lg flex flex-col bg-white-white shadow-md px-3 pt-3 pb-11 cursor-pointer'>
												<div className="relative">
													<img src={item.imageUrl} alt="" className='rounded-xl w-full h-full group-hover:scale-95 transition-all ease-in-out'/>
													<div className={`${item.isPopular ? 'absolute right-0 top-0 px-12 py-3 md:py-2 md:px-4 bg-brand-primary rounded-tr-xl rounded-bl-xl text-white-white':'hidden'}`}>
														<h1>
															<span className='font-medium'>Popular</span>
															<span className='font-regular'> Choice</span>
														</h1>
													</div>
												</div>
												<div className="mt-3 flex flex-col">
													<h1 className='font-medium m-0'>
														{item.name}
													</h1>
													<p>{item.city}, {item.country}</p>
												</div>
												
											</div>
										)
									}
								</div>
							</div>	
						)
					}

				</div>
			</Fade>
			
		</div>
  )
}
