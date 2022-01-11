import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.action";

import {ReactComponent as AccountIcon} from '../../assets/icon-account.svg';

import { gsap } from "gsap";

const Header = ({currentUser, hidden, signOutStart}) => {
    
    const dropRef = useRef(null);
    
    useEffect(() => {
        if(dropRef.current){
            gsap.fromTo(dropRef.current,{
                ease:'power3',
                duration:3,
                delay:.5,
                height:'0%',
                opacity:0
            },{
                height:'100%',
                opacity:1
            })
        }
    },[hidden]);

    return (
    <div className='header'>
        <Link to="/" className='logo-container'> 
            USA
        </Link>
        <div className='options'> 
            <Link to="/shop" className='option'> SHOP </Link>
            <Link to="/contact" className='option'> CONTACT </Link>
            {
                currentUser ?
                <div className="option" onClick={signOutStart}> SIGNOUT</div>
                :
                <Link to="/signin" className='option'> <AccountIcon/> </Link>

            }

            <CartIcon/>
        </div>
        
            {
                hidden ? null 
                :
                <div ref={dropRef} className="just-ref">
                     <CartDropdown  />
                </div>
            }

    </div>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);