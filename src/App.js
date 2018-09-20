import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';


// CREATING OUR User COMPONENT::

const User = ({match})=>{
  return(<h1>WELCOME {match.params.username}! WELCOME ! : </h1>)
};


class App extends Component {
  //  Let's pass our title from the root node.i-e., App Component
  //  We have many many choices. We can create the state object for this entire application and pass data via props to 
  //  which ever component we wish to :) . Later in Redux the whole concept of the state will change though
 
  render() {

    return(
      
      <Router>
       
           <div className="App">
           
            <div>
              <ul>
                <li>
                   <Link to="/" className="myLinks" >Home</Link>
                </li>
               
                <li>  
                  <Link to="/about/" className="myLinks">About</Link>
                </li>

                <li>  
                  <Link to="/user/Peter" className="myLinks">User Peter</Link>
                </li>

                <li>  
                   <Link to="/user/John" className="myLinks">User John</Link>
                </li>
               
              </ul>
            
            </div>
                <Route path="/" exact  render = {
                  ()=>{ // A functional Component which renders some JSX
                   return(<h1>WELCOME TO THE WORLD OF FAIERIES</h1>);
                  }
                 }/>

                 <Route path="/about/" strict exact={true}  render = {
                  ()=>{
                   return(<h1>ABOUT FAIERIES And UNICORNS</h1>);
                  }
                 }/>

                 <Route path="/user/:username" exact strict component={User}></Route>
           </div>
      </Router>
     
    );
  }
}

export default App;
