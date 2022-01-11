import React from "react";

import './collection-item.styles.scss';

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {

    const {  name, price, imageUrl, info, details } = item;

    return(   
        <form className="collection-item">
            <div
                className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            />
            <div className="product-info"> 
                <div className='name' id="name"> {name} 
                    <div className="info"> {info} </div>
                    <div className="details">  {details} </div>
                </div>

            </div>

            <button className="add-to-cart-btn inverted" onClick={()=>addItem(item)}> ADD TO CART | {price} USD</button>
        {/* <div className="collection-footer">
            <CustomButton onClick={()=>addItem(item)} inverted> Add to cart </CustomButton>
        </div> */}
        </form>
        )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
