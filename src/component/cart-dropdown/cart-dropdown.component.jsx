import React, { useEffect, useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { selectCartItems, selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


const CartDropdown = ({cartItems, history, dispatch, hidden}) => {
    
    const [routeState, setRouteState] = useState('');

    useEffect(()=>{
        history.listen((location, action) => {
            setRouteState(location.pathname)
        });
        if(routeState && !hidden) {
            dispatch(toggleCartHidden());
        }
    },[routeState]);

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.length ? 
                    ( cartItems.map( cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        ))
                )
                :
                <span className="empty-message"> Cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}> GO TO CHECKOUT 
            </CustomButton> 
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
  });
  
export default withRouter( connect(mapStateToProps)(CartDropdown) );
// export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })((CartDropdown)));