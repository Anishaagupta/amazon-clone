import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import {useStateValue} from './StateProvider';
import {auth} from "./utils/firebase"; 
import Payment from './components/Payment/Payment';
import Address from './components/Address/Address';
import Thankyou from './components/Thankyou/Thankyou';

const App = () => {
    // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
         dispatch({type: "SET_USER", user: authUser})
      }else{
        dispatch({type: "SET_USER", user: null})
      }
    })
    return () => {
      // Any cleanup operation go in here... such as timer
      unsubscribe();
    }
  }, [dispatch])
  return (
   <Router>
      <div className="App">
       <Switch>
         <Route exact path="/checkout">
         <Header/>
          <Checkout/>
         </Route>
         <Route exact path="/login">
            <Login/>
         </Route>
         <Route exact path="/signUp">
            <SignUp/>
         </Route>
         <Route exact path="/address">
            <Address/>
         </Route>
         <Route exact path="/payment">
            <Payment/>
         </Route>
         <Route exact path="/thankyou">
            <Thankyou/>
         </Route>
         <Route exact path="/">
            <Header/>
            <Home/>
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
