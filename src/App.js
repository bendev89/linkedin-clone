import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import Header from './components/header/Header';
// import Sidebar from './components/SideBar/Sidebar';



function App() {
  return (
    <div className="app">
   {/* <Header />
   <div className="app_body">
     <Sidebar />

   </div> */}
   <Router>
     <Switch>
       <Route exact path="/">
         <Login />
       </Route>
       

     </Switch>
   </Router>

    </div>
  );
}

export default App;
