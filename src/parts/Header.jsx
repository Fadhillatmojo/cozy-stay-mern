import React, {useEffect, useState} from 'react'
import IconLogo from '../pages/iconText'
import Button from '../elements/buttons';
import { useLocation } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";


export default function Header() {

	const location = useLocation();

	// kepentingan toggle menu
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// set toggle menu 
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
  // end kepentingan toggle menu

	// function active
	const getNavLinkClass = path =>{
		return location.pathname === path ? " text-brand-primary" : ""
	}
	
	// nav items array
	const navItems = [
		{link: "Home", path: "/"},
		{link: "Browse by", path: "/browse-by"},
		{link: "Stories", path: "/stories"},
		{link: "Agents", path: "/agents"},
		];
	return (
		<>
			<header className={`fixed z-20 top-0 left-0 right-0 text-black bg-white-white w-full px-2 flex justify-center border-b border-b-white-secondaryWhite`}>
				<nav className={`flex justify-between items-center max-w-screen-lg w-full py-2 md:py-3 `}>
					<IconLogo/>
					<ul className='hidden md:flex space-x-5 items-center'>
						{
							navItems.map( navLink =>
							<li key={navLink.link} className={`nav-item${getNavLinkClass(navLink.path)}`}>
								<Button type='link' href={navLink.path}>
									{navLink.link}
								</Button>
							</li>
							)
						}
					</ul>

					{/* Menu hamburger btn for only mobile device */}
					<div className='inline-flex items-center p-2 w-10 h-10 border border-white-secondaryWhite justify-center text-sm rounded-lg md:hidden hover:bg-white-secondaryWhite'>
						<button
						onClick={toggleMenu}
						className='text-neutralDGrey focus:outline-none focus:text-black'>
							{
							isMenuOpen ? (<FaXmark className='h-5 w-5'/>) : (<FaBars className='h-5 w-5'/>)
							}
						</button>
					</div>
					{/* end hamburger Menu btn for only mobile device */}
				</nav>
			</header>
			{/* menu drop down yang tampil ketika menu toggle di klik */}
			<div className={`${isMenuOpen ? "flex flex-col fixed top-3 left-0 right-0" : "hidden"} md:hidden bg-white-white border-b border-b-white-secondaryWhite mt-12 p-5`}>
				<ul className='md:flex space-y-2 items-center'>
					{
						navItems.map( navLink =>
						<li key={navLink.link} className={`nav-item${getNavLinkClass(navLink.path)}`}>
							<Button type='link' href={navLink.path}>
								{navLink.link}
							</Button>
						</li>
						)
					}
				</ul>
			</div>
		</>
	)
}
