import React from 'react'
import { Component } from 'react'
import classes from './User.module.css'

class User extends Component {
    render(){
        return (
            <li className={classes.list}>{this.props.name}</li>
          )
    }
}

// function User(props) {
//   return (
//     <li className={classes.list}>{props.name}</li>
//   )
// }

export default User