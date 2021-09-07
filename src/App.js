import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserList from './components/UserList';
import Header from './components/Header';
import AddUser from './components/AddUser';
function App() {
  const [users, setUsers] = useState([]);
  
  const dataFromAddUser = (user) => {
    console.log("dataFromAddUser",user)
    setUsers([...users,user]);
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
              <UserList users={users} />
            </Route>
            <Route path="/add" exact render={(props) => <AddUser {...props} parentCallback = {dataFromAddUser}/>}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
