import { Link } from 'react-router-dom';
import CollectionsOverviewContainer from '../collection-overview/collections-overview.container';

import './homeProduct.styles.scss'

const HomeProduct = () => {
    
return(
    <div className='products-panel'>
        <div className='product-title'> SODAS OVER HERE </div>
        <CollectionsOverviewContainer/>
        <div className="view-more">
            <Link to="/shop" className='option'> {`VIEW MORE ITEMS IN SHOP ->`} </Link>
        </div>
    </div>
)};

export default HomeProduct;