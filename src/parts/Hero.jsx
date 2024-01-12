import React from 'react'
import heroImg from '../assets/hero/hero.png'
import Button from '../elements/buttons'

export default function Hero() {
  return (
	<div className='bg-white w-full px-2 flex justify-center mt-20 md:mt-24'>
		<div className="max-w-screen-lg w-full flex flex-col-reverse md:flex-row lg:space-x-16">
			<div className='flex flex-col justify-center px-5 md:w-1/2'>
				<h1 className='text-3xl lg:text-5xl font-medium text-center md:text-left mt-8 md:mt-0'>
					Forget Hectic Work, Start Joyfull Vacation With Us
				</h1>
				<p className='my-4 text-center md:text-left'>
					We provide what you need to enjoy your <br className='hidden md:block'></br>
					holiday with family. Time to make another <br className='hidden md:block'></br>
					memorable moments.
				</p>
				<Button isPrimary className='md:mt-4 hover:bg-brand-dark'>
					Show Me Some Place
				</Button>
			</div>
			<img src={heroImg} alt="" className='md:w-1/2'/>

		</div> 
	</div>
  )
}
