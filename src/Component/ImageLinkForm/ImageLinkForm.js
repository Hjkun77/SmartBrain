import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, DetectButton }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try and see the magic!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
          <button
            className="w-30 grow f4 ph3 pv2 dib white bg-light-purple"
            onClick={DetectButton}>Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
