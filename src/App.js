import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/navBar';
import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriends from './components/addFriends';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        <PrivateRoute path="/friends/add" component={AddFriends}/>
        <PrivateRoute path="/friends" component={FriendsList}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
//commit