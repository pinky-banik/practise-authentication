import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Culture from './components/Culture/Culture';
import NotFound from './components/NotFound/NotFound';
import GrandFatherHouse from './components/GrandFatherContex/GrandFatherHouse.js/GrandFatherHouse';
import Friends from './components/FriendsRoute/Friends/Friends';
import FriendDetail from './components/FriendsRoute/FriendDetail/FriendDetail';
import AuthPractise from './components/AuthPractise/AuthPractise';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/Authentication/PrivatRoute/PrivateRoute';





function App() {
  

  return (
    <div className="App">
      <Router>
      <Route>
          <Navbar>
          </Navbar>
        </Route>
      <Switch>
        <Route exact path="/">
          <Home>
          </Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route path="/friends">
        <Friends>
        </Friends>
        </Route>
        <Route exact path ="/about">
          <About></About>
        </Route>
        <Route exact path="/about/culture">
          <Culture></Culture>   
        </Route>
        
        <Route path="/grandFather">
          <GrandFatherHouse></GrandFatherHouse>
        </Route>
        <Route path="/authPractise">
          <AuthPractise></AuthPractise>
        </Route>
        
        <PrivateRoute path="/shipping">
          <Shipping></Shipping>
        </PrivateRoute>
        <Route>
          <NotFound>
          </NotFound>
        </Route>
      </Switch>
      </ Router>
    </div>
  );
}

export default App;
