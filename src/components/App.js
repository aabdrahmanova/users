import React, {Component} from 'react'
import UserList from './UserList'
import users from '../usersArr'
import {CreateUser} from './CreateUser/index';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <CreateUser/>
                <h3 className style={{padding: '50px', font: '30px Open Sans Light', textTransform: 'uppercase'}}>
                    Список пользователей
                </h3>
                <UserList users={users} />
            </div>
        )
    }
}  

export default App;
