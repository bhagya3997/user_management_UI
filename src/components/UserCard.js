import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
const UserCard = (props) => {
  console.log('UserCard js file',props);
  const deleteUser = () => {
    confirmAlert({
      title: 'Delete Confirmation',
      message: 'Are you sure want to delete the user "'+props.user.name+'"?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            props.removeUser(props.user.id)
          }
        },
        {
          label: 'No',
          
        }
      ]
    })
    // props.removeUser(props.user.id)
  }
  return(
      <div className="item">
         <div className="content" style={{float: "left"}}>
            <Link to={{pathname : `/user/${props.user.id}`, state:{user:props.user}}}>
              <div className="header">
                {props.user.name}
              </div>
              <div>
                {props.user.email}
              </div>
            </Link>
          </div>
          <i className="trash alternate icon" style={{float: "right",color: "red", marginTop: "10px",cursor: "pointer"}} onClick={deleteUser}></i>
      </div>
  );
}
export default UserCard;