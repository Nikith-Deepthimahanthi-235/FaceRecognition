import React, {Component} from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import SignIn from './SignIn/SignIn';
import Register from './Register/Register';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import ImageForm from './ImageForm/ImageForm';
import Rank from './Rank/Rank';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
	apiKey: '5e10d9baa904444f9ed3de2ef308ead5'
})
const particlesoption={ 
				particles: {
            			number:{
            				value:110,
            				density: {
            					enable: true,
            					value_area: 800
            				}
            			}
            		}
}

class  App extends Component{
	constructor(){
		super();
		this.state={
			input: '',
			imageURL: '',
			box: {},
			route: 'signin',
			isSignedIn: false
		}
	}
	calculateLocation = (data) =>{
		const Boundary= data.outputs[0].data.regions[0].region_info.bounding_box
		const image =document.getElementById('inputImg');
		const width= Number(image.width);
		const height= Number(image.height);
		return{
			leftCol : Boundary.left_col*width,
			topRow : Boundary.top_row*height,
			rightCol : width- (Boundary.right_col * width),
			bottomRow : height- (Boundary.right_col * height),
			
			}

	}
	Display= (box) =>{
		console.log(box);
		this.setState({box: box});
	}
	onInputChange =(event) =>{
		this.setState({ input : event.target.value});
	}
	onSubmit = () =>{
		this.setState({imageURL: this.state.input})
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then(response =>this.Display(this.calculateLocation(response)))
   		.catch(err => console.log(err));
		}

onRouteChange = (route) => {
	if(route==='signout'){
		this.setState({isSignedIn: false})
	} else if(route==='home'){
		this.setState({isSignedIn: true})
	}
	this.setState({route: route})
}

render(){
	const { isSignedIn, imageURL, route, box } = this.state;
  return (
    <div className= 'App'>
     <Particles className='particles'
                params={particlesoption}/>
   <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
{ route === 'home' 
     ?<div> <Logo />
    	<Rank />
      <ImageForm 
      onInputChange={this.onInputChange}
      onSubmit={this.onSubmit}/>
      <FaceRecognition box={box} imageURL={imageURL} />
	</div>   
	: (
		route ==='signin'
		?<SignIn onRouteChange={this.onRouteChange}/> 
      	:<Register onRouteChange={this.onRouteChange}/>)
     }
    </div>
  );
}
}
export default App;
