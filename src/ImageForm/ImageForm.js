import React from 'react';
import './ImageForm.css'
const ImageForm =({onInputChange, onSubmit}) =>{
	return(
		<div>
		<p className='nwe'>
			{'This Brain of MINE will detect faces in your pictures.give it a try'}
		</p>
		<div className=' mt5 center pa4 br3 shadow-5 center1'>
		<input placeholder='plx post ur picture'className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
		<button onClick={onSubmit} className='f4 pa2 grow link w-30 ph3 white bg-light-green dib'>DETECT</button>
		</div>
		</div>
		)
}
export default ImageForm;