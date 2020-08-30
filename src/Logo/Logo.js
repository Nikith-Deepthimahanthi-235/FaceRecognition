import React from 'react';
import './Logo.css'
import symbolN from './Nsym.png';
import Tilt from 'react-tilt';
const Logo =() =>{
	return(
		<div className='flex'>
		<Tilt className="Tilt" options={{ max : 40 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner"> <img className="flexcenter" alt ='logo'src={symbolN}/> </div>
</Tilt>
		
		</div>
		)
}


export default Logo;