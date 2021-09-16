import React from 'react';
import UserCard from './UserCard';
import {Link} from 'react-router-dom';
// import BootstrapTable from 'react-bootstrap-table-next'
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
  const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];
  const products = [{
    id:1,
    name:'chair',
    price:400
  }, {
    id:1,
    name:'fan',
    price:400
  }, {
    id:1,
    name:'table',
    price:400
  }];
  
  return(
      <div className="addUser">
        <h3 className="Heading"> User List </h3> 
        <Link to={{pathname : `/add/0`, state:{userId:0}}}>
          <button className="ui button blue right"><i className="fa fa-plus" style={{fontsize: "0.5rem"}}/></button>
        </Link>
        <div className="ui celled list">
          {renderUser}
        </div>
          {/* <BootstrapTable keyField='id' data={ products } columns={ columns } /> */}

      </div>
  );
}
export default UserList;