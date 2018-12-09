import React from 'react';
import './faceRecognition.css';



const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="center ma">
            <div className='absolute mt2'>
                <img id='input_image' src={imageUrl} alt="" width='500px' height='auto' />
                <div className='bounding_box' style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;