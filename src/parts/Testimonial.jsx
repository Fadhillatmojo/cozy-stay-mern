import React from 'react'

export default function Testimonial(props) {
	const testimonial = props.dataTestimonial;
	return (
		<div className='bg-white w-full px-2 flex justify-center py-5 md:py-10'>
			<div className="max-w-screen-lg w-full flex flex-col">
				{testimonial.name}
			</div>

		</div>
	)
}
