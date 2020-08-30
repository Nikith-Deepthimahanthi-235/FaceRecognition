import React from 'react';
import '../SignIn/SignIn.css'
const Register =({onRouteChange}) =>{
	return(			<div>
		<main className=" v-mid  pa4 black-80">
		<article  className="br3 ba nik b--black-10 w-100 w-50-m w-25-l mw-40 h-auto  shadow-5 center">

		 	 <div className="measure  ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className=" black  fw6 ph0 fontt mh0 mt3">Register</legend>
		            <div className="mt3">
		        <label className="db black fw6 lh-copy w-100 f3" htmlFor="name">Name</label>
		        <input className="pa2 input-reset ba  bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
		      </div>
		      <div className="mt3">
		        <label className="db black fw6 lh-copy w-100 f3" for="email-address">Email</label>
		        <input className="pa2 input-reset ba  bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db black fw6 lh-copy f3" for="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		  
		    </fieldset>
		    <div className="">
		      <input 
		      onClick={()=> onRouteChange('home')}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 mb3 dib" 
		      type="submit" value="Register"/>
		    </div>

		  </div>
		    </article>

		  </main>
</div>
		)
}

export default Register;