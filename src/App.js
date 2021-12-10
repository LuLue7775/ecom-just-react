import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth  => {

      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, ()=>{ console.log(this.state) } );
          });
      }
      

      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    //According to the documentation, the onAuthStateChanged() function returns the unsubscribe function for the observer. So you can just:
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div className="App">
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop}/>
            <Route path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
