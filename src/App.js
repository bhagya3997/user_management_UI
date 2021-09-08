import './App.css';
import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserList from './components/UserList';
import Header from './components/Header';
import AddUser from './components/AddUser';
import UserDetails from './components/UserDetails';
function App() {
  const [users, setUsers] = useState([]);
  const dataFromAddUser = (user) => {
    console.log("dataFromAddUser",user)
    setUsers([...users,{ id : uuid(), ...user }]);
  }
  
  const removeUserHandler = (userId) => {
    const newUserList = users.filter(user => {
     return user.id !== userId
    })
    setUsers(newUserList)
    console.log("removeUserHandler app.js",userId)
  }

  useEffect(() => {
    const retrievedUsers = JSON.parse(localStorage.getItem("users"))
    if (retrievedUsers){
      setUsers(retrievedUsers)
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(users))
  },[users]);
  return (
    
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact >
              <UserList users={users} removeUser={removeUserHandler}/>
            </Route>
            <Route path="/add" exact render={(props) => <AddUser {...props} parentCallback = {dataFromAddUser}/>}/>
            <Route path="/user/:userId" exact render={ (props) => <UserDetails {...props}/>}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
