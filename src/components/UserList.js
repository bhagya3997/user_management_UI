import React from 'react';
import UserCard from './UserCard';
import {Link} from 'react-router-dom';

const UserList = (props) => {
  console.log('UserList js file--------------',props);
  const deleteHandler = (id) => {
    console.log("deleteHandler",id)
    props.removeUser(id)
  };
  const renderUser = props.users.map((user) => {
    return(
      <UserCard user={user} removeUser={deleteHandler} key={user.id}></UserCard>
    );
  });
  return(
      <div className="addUser">
        <h3 className="Heading"> User List </h3> 
        <Link to="/add">
          <button className="ui button blue right"><i className="fa fa-plus" style={{fontsize: "0.5rem"}}/></button>
        </Link>
        <div className="ui celled list">
          {renderUser}
        </div>
      </div>
  );
}
export default UserList;