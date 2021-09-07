import React from 'react';

const UserCard = (props) => {
  console.log('UserCard js file',props);
  function removeUser(){
    console.log("removeUser method")
  }

  return(
      <div className="item">
         <div className="content" style={{float: "left"}}>
            <div className="header">
              {props.user.name}
            </div>
            <div>
              {props.user.email}
            </div>
          </div>
          <i className="trash alternate icon" style={{float: "right",color: "red", marginTop: "10px"}} onClick={removeUser}></i>
      </div>
  );
}
export default UserCard;