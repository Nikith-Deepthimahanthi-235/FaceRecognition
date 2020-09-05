import React from 'react';
import './SignIn.css'
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signinEmail: '',
			signinPasword: ''
		}
	}
	onEmailChange =(event) =>{
		this.setState({signinEmail: event.target.value})
	}
		onPasswordChange =(event) =>{
		this.setState({signinPasword: event.target.value})
	}
	onSubmitSignin = () =>{
		fetch('http://localhost:3001/signin', {
			method : 'post' ,
			headers : {'Content-Type' : 'application/json'},
			body: JSON.stringify({
				email : this.state.signinEmail,
				password : this.state.signinPasword
			})
		})
		.then(res => res.json())
		.then(data =>{
			if (data === 'success') {this.props.onRouteChange('home')}
		})

	}
	render(){
		const { onRouteChange } = this.props;
		return(		
			<div>
		<main className=" v-mid  pa4 black-80">
		<article  className="br3 ba nik b--black-10 w-100 w-50-m w-25-l mw-40 h-auto  shadow-5 center">

		 	 <div className="measure  ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className=" black fw6 ph0 fontt mh0 mt3">Sign In</legend>
		      <div className="mt3">
		        <label className="db black fw6 lh-copy w-100 f3" htmlFor="email-address">Email</label>
		        <input onChange={this.onEmailChange}
		        className="pa2 input-reset ba  bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="email-address"  
		        id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db black fw6 lh-copy f3" htmlFor="password">Password</label>
		        <input  onChange={this.onPasswordChange}
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
		        type="password" 
		        name="password"  
		        id="password"/>
		      </div>
		  
		    </fieldset>
		    <div className="">
		      <input 
		      onClick={this.onSubmitSignin}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
		      type="submit" value="Sign in"/>
		    </div>
		    <div className="lh-copy mt3">
		      <p onClick={()=> onRouteChange('register')} className="f4 pointer link dim black db">Register</p>
		    </div>
		  </div>
		    </article>

		  </main>
		</div>
		);
	}
	
}

export default SignIn;