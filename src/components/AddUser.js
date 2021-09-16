import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './Header.css';
import { Link } from 'react-router-dom';
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
    
    
      console.log("constructor")
  }

  componentDidMount(){
    console.log("componentDidMount",this.props.location.state.userId)
    const retrievedUsers = JSON.parse(localStorage.getItem("users"))
    console.log(retrievedUsers)
    retrievedUsers.some(user => {
      if(user.id == this.props.location.state.userId){
        console.log(user)
        this.setState({
          name:user.name,
          firstName:user.firstName,
          lastName:user.lastName,
          email:user.email,
          mobileNumber:user.mobileNumber
        })
      }
    })
  }
  handleChange = (e) => {
    console.log("handleChange method",e.target)
    this.setState({[e.target.name] : e.target.value})    
    console.log(this.state)
  }
  clickAddMethod = (e) => {
    e.preventDefault()
    if(this.state.name === "" || this.state.email === '' || this.state.mobileNumber === ''){
      confirmAlert({
        title: 'Please fill all the mandatory fields',
        message: 'Enter the details name, emailid, mobilenumber.',
        buttons: [
          {
            label: 'OK',
          }
        ]
      })
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
        
        <div className="Heading" style={{ width : '65%', paddingLeft:"30%"}}>
        <Link to="/">
                    <button className="ui button blue left floated"><i className="arrow left icon"></i></button>
                </Link>
        <h3 style={{margin:'5px'}}> Add User </h3>
        </div>
        <form className="ui form" style={{marginTop:'50px'}} onSubmit={this.clickAddMethod}>
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