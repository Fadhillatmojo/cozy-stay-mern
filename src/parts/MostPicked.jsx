import React from 'react'

export default function MostPicked(props) {
	const accommodations = props.dataMostPicked;
	return (
		<div className='bg-white w-full px-2 flex justify-center mt-20 md:mt-24'>
			<div className="max-w-screen-lg w-full">
				{
					accommodations.map(accommodation =>
						<p key={accommodation._id}>
							{accommodation.name}
						</p>
					)
				}
			</div>
		</div>
	)
}
