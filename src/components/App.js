import React, {Component} from 'react'
import UserList from './UserList'
import users from '../usersArr'
import {CreateUser} from './CreateUser/index';

class App extends Component {
    constructor() {
		super()

		this.state = {
			modal: false
		}
        this.renderModal = this.renderModal.bind(this);
		this.modalToggle = this.modalToggle.bind(this);
    }
    
    modalToggle() {
		this.setState({
			modal: !this.state.modal
        });
	}

	renderModal() {
		return this.state.modal ? <CreateUser closeModal={this.modalToggle} /> : '';
	}
    render() {
        return (
            <div className='container'>

                <h3 className style={{padding: '50px', font: '30px Open Sans Light', textTransform: 'uppercase'}}>
                    Список пользователей
                </h3>
                <button style={{padding: '10px', textTransform: 'uppercase', border: '2px solid blue', float: 'right'}} onClick={this.modalToggle}>
                    Создать пользователя
                </button>
                {this.renderModal()}
                <UserList users={users} />
            </div>
        )
    }
}  

export default App;
