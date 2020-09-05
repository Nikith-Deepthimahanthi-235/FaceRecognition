import React from 'react';
import './FaceRecognition.css';
const FaceRecognition =({imageURL,box}) =>{
	return(
		<div className='center ma'>
		<div className=' absolute  mt2'>
	
		<img id='inputImg'  width='700px' height='auto' alt='' 
		src={imageURL} />
		<div className='Bounding_Box'style={{top: box.topRow, bottom: box.bottomRow
			, right: box.rightCol, left: box.leftCol}}></div>
		</div>
		</div>

		)
}
export default FaceRecognition;