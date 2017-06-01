import React from 'react';
import {connect} from "react-redux";

function Users(props) {
  var usersDivs = null;
  if(props.users){
    var sorted = props.users.sort((a,b) => {
      return a[props.sortOn] > b[props.sortOn];
    });
    usersDivs = sorted.filter(function(u){
      return !props.firstNameFilter || 
      (props.firstNameFilter && 
      u.first_name.indexOf(props.firstNameFilter) > -1);
    })
    usersDivs = usersDivs.map(function(u,i){
      return <div key={i}>{u.first_name} {u.last_name}</div>
    })
  }
  return (
      <div>
        <h1>Users</h1>
       {usersDivs}
      </div>
  );
}
function mapStateToProps(state){
  return {
    users:state.users,
    sortOn:state.currentUserSort,
    firstNameFilter: state.searchText
  };
}
export default connect(mapStateToProps)(Users);