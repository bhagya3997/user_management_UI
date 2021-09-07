import React from 'react';

import './Header.css';
class AddUser extends React.Component {
  

  constructor(props) {
    super(props);
    console.log("constructor",this.props)
    this.state = {
      name:'',
      firstName:'',
      lastName:'',
      email:'',
      mobileNumber:''
    };

    }


  handleChange = (e) => {
    console.log("handleChange method",e.target)
    this.setState({[e.target.name] : e.target.value})    
    console.log(this.state)
  }
  clickAddMethod = (e) => {
    e.preventDefault()
    console.log("props",this.props)
    console.log(this.props)
      
    if(this.state.name === "" || this.state.email === '' || this.state.mobileNumber === ''){
      alert('Please fill all the mandatory fields: Name, Email, MobileNumber');
      return;
    } 
    this.props.parentCallback(this.state)
      this.setState({name:'',
      firstName:'',
      lastName:'',
      email:'',
      mobileNumber:''});
      this.props.history.push("/")
  }
  render() {
    return(
      <div className="ui main addUser">
        <h2> Add User </h2>
        <form className="ui form" onSubmit={this.clickAddMethod}>
          <div className="field fieldDiv">
            <label className="labelDiv"> Name </label> 
            <input className="inputDiv" type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} onKeyUp={this.handleChange}/>
          </div>
          <div className="field fieldDiv">
            <label className="labelDiv"> First Name </label> 
            <input className="inputDiv" type="text" name="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange} onKeyUp={this.handleChange}/>
          </div>
          <div className="field fieldDiv">
            <label className="labelDiv"> Last Name </label> 
            <input className="inputDiv" type="text" name="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleChange} onKeyUp={this.handleChange}/>
          </div>
          <div className="field fieldDiv">
            <label className="labelDiv"> Email </label> 
            <input className="inputDiv" type="text" name="email" placeholder="Enter Email ID" value={this.state.email} onChange={this.handleChange} onKeyUp={this.handleChange}/>
          </div>
          <div className="field fieldDiv">
            <label className="labelDiv"> Mobile Number </label> 
            <input className="inputDiv" type="text" name="mobileNumber" placeholder="Enter Mobile Number" value={this.state.mobileNumber} onChange={this.handleChange} onKeyUp={this.handleChange}/>
          </div>
          <button className="ui button blue buttonDiv"> Add </button>
        </form>
        
      </div>
    );
  }
}
export default AddUser;