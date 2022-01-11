import CustomButton from '../custom-button/custom-button.component';
import './homeLargeImage.styles.scss'
import {  withRouter } from 'react-router-dom';
const HomeLargeImage = ({ history }) => {
    
return(
    <div className='first-panel'>
        <div className='shop-now-btn'> 
            <CustomButton onClick={()=> history.push('/shop') }> Shop Now</CustomButton> 
        </div>
        <div className='first-line'> SODAS IS ALL WE SELL</div>
    </div>
)};

export default withRouter(HomeLargeImage);