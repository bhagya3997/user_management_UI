import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const UserDetails = (props) => {
    console.log("props in userDetails",props)
    const {id, name, email, firstName, lastName, mobileNumber} = {...props.location.state.user}
    
    return(
        <div className="ui main addUser">
            
            <div className="ui container block clear" style={{width : '600px'}}> 
                <Link to="/">
                    <button className="ui button blue left floated"><i className="arrow left icon"></i></button>
                </Link>
                <Link to={{pathname : `/add/${id}`, state:{userId:id}}}>
                    <button className="ui button blue right floated"><i className="edit icon"></i></button>
                </Link>
                <h3 style={{paddingTop:'7px',marginRight:'50px'}}>Add User </h3> 
                
            </div>
            <div className="ui form">
                <div className="field fieldDiv">
                    <label className="labelDiv"> Name </label> 
                    <span> : </span>
                    <span className="inputDiv"> {name} </span>
                </div>
                <div className="field fieldDiv">
                    <label className="labelDiv"> First Name </label> 
                    <span> : </span>
                    <span className="inputDiv"> {firstName} </span>
                </div>
                <div className="field fieldDiv">
                    <label className="labelDiv"> Last Name </label> 
                    <span> : </span>
                    <span className="inputDiv"> {lastName} </span>
                </div>
                <div className="field fieldDiv">
                    <label className="labelDiv"> Email </label> 
                    <span> : </span>
                    <span className="inputDiv"> {email} </span>
                </div>
                <div className="field fieldDiv">
                    <label className="labelDiv"> Mobile Number </label> 
                    <span> : </span>
                    <span className="inputDiv"> {mobileNumber} </span>
                </div>
                
            </div>
              
        </div>
    );
}


export default UserDetails;