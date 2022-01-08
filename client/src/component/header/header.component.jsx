import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.action";

const Header = ({currentUser, hidden, signOutStart}) => (

    <div className='header'>
        <Link to="/" className='logo-container'> 
            <Logo className='logo' />
        </Link>
        <div className='options'> 
            <Link to="/shop" className='option'> SHOP </Link>
            <Link to="/contact" className='option'> CONTACT </Link>
            {
                currentUser ?
                <div className="option" onClick={signOutStart}> SIGNOUT</div>
                :
                <Link to="/signin" className='option'> SIGNIN </Link>
            }
            <CartIcon/>
        </div>

        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);