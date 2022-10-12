import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';
import React, { FunctionComponent, PropsWithRef } from 'react';

type NavBarProps = {
	title: string,
	classProps?: string
};

let NavBarItem:FunctionComponent<NavBarProps> = ({title, classProps}) => {
	return(
		<li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
	);
}

let Navbar:FunctionComponent = () => {
	return(
		<nav className="w-full flex md:justify-center justify-between items-center p-4">
			<div className='md:flex-[0.5] flex-initial justify-center items-center'>
				<img src={logo} alt={logo} className="w-32 cursor-pointer"/>
			</div>
			<ul className='text-white'>
				{["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
					<NavBarItem key={index} title={item} />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;