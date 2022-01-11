import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './homeFooter.styles.scss'

const HomeFooter = () => {
    
return(
    <div className='footer'>
        <div className='subscribe'> 
        <div className="form-inner">
            <div className='subscribe-title'> Get Updated News </div>
            <div className="form-input-wrapper">
                <input type="email" name="email" className="form-input" placeholder="Email"/>
            </div>

            <p className="disclaimer">By subscribing, you agree to receive recurring automated marketing messages at this email address and phone number. Reply STOP to unsubscribe. Msg &amp; data rates may apply.</p>
            <CustomButton > Subscribe </CustomButton>
        </div>
        </div>

        <div className='footer-links'> 
            <div className='footer-left'> 
            <Link to="/shop" className='option'> Shop </Link>
            <Link to="/shop" className='option'> Contact </Link>
            <Link to="/shop" className='option'> FAQ </Link>
            <Link to="/shop" className='option'> Policy </Link>
            </div>
            <div className='footer-right'>
            <p>A site by Lu.</p> 
            <p>© Products Inc 2021. All Rights Reserved.</p>
            </div>
        </div>
    </div>
)};

export default HomeFooter;