import React from 'react'
import Button from '../elements/buttons'

export default function iconText(props) {
	const isWhite = props.isWhite;
	return (
		<div className='flex items-center justify-between border border-white-secondaryWhite rounded-full px-3 max-w-[200px] space-x-1 py-1'>
			<svg xmlns="http://www.w3.org/2000/svg" width="41" height="36" viewBox="0 0 41 36" fill="none">
				<path d="M34.7854 30.1422C26.9749 37.9526 14.3116 37.9526 6.5011 30.1422C2.4021 26.0432 0.454288 20.6076 0.657653 15.2383C0.956524 7.34752 10.9354 10.8948 18.6329 9.13337C25.4096 7.58264 29.5206 -3.40693 34.7854 1.85788C42.5959 9.66837 42.5959 22.3317 34.7854 30.1422Z" fill="#7267EB"/>
			</svg>
			<Button className={`${isWhite===true ? 'text-white-white':'text-brand-dark'} font-medium text-xl`} type='link'>
				Cozy Vacation
			</Button>
		</div>
	)
}
