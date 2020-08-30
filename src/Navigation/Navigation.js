import React from 'react';
import './Navigation.css'
const Navigation =({onRouteChange, isSignedIn}) =>{

		if(isSignedIn){
			return(
		<nav style={{display: 'flex', justifyContent:'flex-end',marginRight :'2vh' }}>
		<p onClick={()=> onRouteChange('signout')}className=' link dim underline pas3 pointer'>Sign Out</p>
		</nav>
		);
		} else {
			return(
			<nav style={{display: 'flex', justifyContent:'flex-end',marginRight :'2vh' }}>
		<p onClick={()=> onRouteChange('signin')}className=' link dim underline pas3 pointer ma2'>Sign In</p>
		<p onClick={()=> onRouteChange('register')}className=' link dim underline pas3 pointer ma2'>Register</p>
		</nav>			
		);
		}
		
}

export default Navigation;