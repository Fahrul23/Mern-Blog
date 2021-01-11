import React from 'react';
import { ICFacebook } from '../../../assets';
import './upload.scss';

function Upload(props) {
    return (
        <div className="upload">
            <img className="preview" src={ICFacebook} alt="preview"/>
            <input type="file" />
        </div>
    );
}

export default Upload;