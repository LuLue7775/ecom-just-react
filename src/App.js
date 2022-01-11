import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

import Routes from './Routes';
class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    
  }
  
  // componentWillUnmount() {
  //   //According to the documentation, the onAuthStateChanged() function returns the unsubscribe function for the observer. So you can just:
  //   this.unsubscribeFromAuth(); 
  //   }

  render() {
    return (
      <div className="App">

          <Router>
            <Route path="/" component={Routes} />
          </Router>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);