import React,{Component}  from 'react'
import UserCard from '../UserCard/index'
import './style.css'

export default class UserList extends Component {
    render() {
        const userElements = this.props.users.map((user, index) =>
            <li key={user.id} className='user-list_li'>
                <UserCard user = {user}/>
            </li>
        )
        return (
            <ul>
                {userElements}
            </ul>
        )
    }
}
    