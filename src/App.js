import {React, Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import './App.css';

import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import Header from "./components/Header";
import SignIn from "./Auth/SignIn";
import Checkout from './views/Checkout';

import {auth, createUserProfileDocument} from "./Auth/Firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

 
class App extends Component{
  
  unsubscribeFromAuth = null

componentDidMount(){
  const { setCurrentUser } = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
        userRef.onSnapshot(snapShot=>{
          
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
        
        })
        console.log(this.state);
    }
    setCurrentUser(userAuth)
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path="/signIn"
           render={()=> this.props.currentUser ?  (
            <Redirect to="/" />
            ) : (
            <SignIn/>
            )}
             />

        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})


export default connect( mapStateToProps, mapDispatchToProps )(App);
