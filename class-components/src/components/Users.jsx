import {Component,useState}from "react";

import User from "./User";
import classes from './Users.module.css'

const Dummmy_Users = [
  {id: 'u1', name: 'Max'},
  {id: 'u2', name: 'Manuel'},
  {id: 'u3', name: 'Julie'}

]




// class Users extends Component{
    
//   constructor(){
//     super();
//     this.state = {      
//       showUser: true
//     }
    
//   }

//   toggleShowUsersHandeler(){
//     this.setState((currState) => {
//       return{ showUser: !currState.showUser } 
//     } )
//   }

//   render() {
//     const UserList = Dummmy_Users.map(user => {
//           return <ul className={classes.users}>{this.showUser && <User key={user.id} name={user.name} />}</ul>
//         }) 
//     return (
      
//       <div>
//         <button className={classes.btn} onClick={this.toggleShowUsersHandeler.bind(this)}>Users</button>
//         {this.state.showUser && UserList}
//       </div>
//     );
//   }
//   }



function Users() {
  const [showUsers, setShowUsers] = useState(false)

  const toggleShowUsersHandeler = () => {
    setShowUsers((prevState) => !prevState)
  }

  const UserList = Dummmy_Users.map(user => {
    return <ul className={classes.users}>{showUsers && <User key={user.id} name={user.name} />}</ul>
  }) 


  return (
    <div>
      <button className={classes.btn} onClick={toggleShowUsersHandeler}>Users</button>
      {UserList}
    </div>
  );
}

export default Users;
