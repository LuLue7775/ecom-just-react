import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout.component';
import { Route, Switch, Redirect } from 'react-router-dom';


import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth  => {

      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
          });
      }
      
      setCurrentUser( userAuth ); 
    });
  }

  componentWillUnmount() {
    //According to the documentation, the onAuthStateChanged() function returns the unsubscribe function for the observer. So you can just:
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop}/>
            <Route path='/signin' render={() => this.props.currentUser ? ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage/> )}/>
            <Route path='/checkout' component={CheckoutPage} />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);