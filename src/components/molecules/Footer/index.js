import React from 'react';
import { ICFacebook, ICInstagram, ICTwitter, ICYoutube, logo } from '../../../assets';
import './Footer.scss';

const Icon=({img})=>{
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}


function Footer(props) {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICYoutube} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    );
}

export default Footer;