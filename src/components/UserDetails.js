import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const UserDetails = (props) => {
    console.log("props in userDetails",props)
    const {name, email, firstName, lastName, mobileNumber} = {...props.location.state.user}
    
    return(
        <div className="addUser">  
            <h3 className="Heading"> User Details </h3>
            <div className="field fieldDiv">
                <label className="labelDiv"> Name </label> 
                <div className="inputDiv">
                    {name}
                </div>
            </div>
            <div className="field fieldDiv">
                <label className="labelDiv"> First Name </label> 
                <div className="inputDiv">
                    {firstName}
                </div>
            </div>
            <div className="field fieldDiv">
                <label className="labelDiv"> Last Name </label> 
                <div className="inputDiv">
                    {lastName}
                </div>
            </div>
            <div className="field fieldDiv">
                <label className="labelDiv"> Email </label> 
                <div className="inputDiv">
                    {email}
                </div>
            </div>
            <div className="field fieldDiv">
                <label className="labelDiv"> Mobile Number </label> 
                <div className="inputDiv">
                    {mobileNumber}
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue"><i class="arrow left icon"></i></button>
                </Link>
            </div>
        </div>
    );
}


export default UserDetails;