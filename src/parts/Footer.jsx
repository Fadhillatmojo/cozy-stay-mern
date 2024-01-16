import React from 'react'
import IconLogo from '../elements/iconText'
import Button from '../elements/buttons'

export default function Footer() {
  return (
	<footer className='bg-brand-dark text-white-white w-full px-2 flex justify-center py-5 md:py-10'>
		<div className="max-w-screen-lg w-full flex flex-col md:flex-row">
			<div className="grid grid-cols-1 md:grid-cols-4 w-full md:space-x-10">
				{/* col 1 */}
				<div className="flex flex-col space-y-2">
					<IconLogo isWhite={true}/>
					<p className='mt-3 font-light'>Accompany your holiday journey</p>
				</div>
				{/* col 2 */}
				<div className="flex flex-col space-y-2">
					<h1 className='font-medium mb-8'>For Beginners</h1>
					<Button type='link' href={`#`} className='font-light'>
						New Account
					</Button>
					<Button type='link' href={`#`} className='font-light'>
						Start Booking a Room
					</Button>
					<Button type='link' href={`#`} className='font-light'>
						Use Payments
					</Button>
				</div>
				{/* col 3 */}
				<div className="flex flex-col space-y-2">
					<h1 className='font-medium mb-8'>Explore Us</h1>
					<Button type='link' href={`#`} className='font-light'>
						Our Careers
					</Button>
					<Button type='link' href={`#`} className='font-light'>
						Privacy
					</Button>
					<Button type='link' href={`#`} className='font-light'>
						Terms & Conditions
					</Button>
				</div>
				{/* col 4 */}
				<div className="flex flex-col space-y-2">
					<h1 className='font-medium mb-8'>Connect Us</h1>
					<p className='font-light'>
						support@cozyvacation.com
					</p>
					<p className='font-light'>
						081 - 2294 - 93890
					</p>
					<p className='font-light'>
						Yogyakarta, Indonesia
					</p>
				</div>
			</div>
		</div>
	</footer>
  )
}
