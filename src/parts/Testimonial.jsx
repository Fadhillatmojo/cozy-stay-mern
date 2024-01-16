import React from 'react'
import Button from '../elements/buttons'

export default function Testimonial(props) {
	const testimonial = props.dataTestimonial;
	return (
		<div className='bg-white w-full px-2 flex justify-center py-5 md:py-10'>
			<div className="max-w-screen-lg w-full flex flex-col md:flex-row justify-evenly">
				<img src={testimonial.imageUrl} alt="" className='md:w-1/3'/>

				<div className='flex flex-col justify-center items-center md:items-start px-5 md:w-1/2'>
					<p className='text-center md:text-left font-medium mt-5 md:mt-0'>
						{testimonial.name}
					</p>
					<p>Rating: {testimonial.rate}</p>
					<h1 className='text-2xl lg:text-3xl font-medium text-center md:text-left mt-5 md:mt-5'>
						{testimonial.content}
					</h1>
					<Button isPrimary className='mt-4 hover:bg-brand-dark'>
						Read Their Story
					</Button>
				</div>
			</div>

		</div>
	)
}
