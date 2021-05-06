import './App.css';
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Chat from './Chat/Chat';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [user, dispatch] = useStateValue();
  
  return (
    //Bem Naming
    <div className="app">
      {!user ?(
        <Login/>
      ):(
      
     <div className="app__body">
       
       <Router>
           <Sidebar/>
         <Switch>
            {/* <Chat/> */}
           <Route path="/room/:roomId">
            
            <Chat/>
           </Route>
           <Route path="/">
             {/* <Chat/> */}
           </Route>
        </Switch>
       </Router>
     </div>
      )}
      </div>
  );
}

export default App;
