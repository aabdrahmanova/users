import React, {Component} from 'react'
import UserList from './UserList'
import users from '../usersArr'
import Modal from './CreateUser/index'

class App extends Component {
    constructor() {
		super();

		this.state = {
			modal: false
		};

		this.renderModal = this.renderModal.bind(this);
		this.modalToggle = this.modalToggle.bind(this);
	}

	modalToggle() {
		this.setState({
			modal: !this.state.modal
        });
	}

	renderModal() {
		return this.state.modal ? <Modal closeModal={this.modalToggle} /> : '';
	}

    render() {
        return (
            <div className='container'>
                    <h3 className='display-4' style={{padding: '40px'}}>
                        Список пользователей
                    </h3>
                    <button className="btn btn-primary" onClick={this.modalToggle}>Создать пользователя</button>
				    {this.renderModal()}
                	<UserList users={users} />
					<div class="btn-toolbar" role="toolbar" aria-label="...">
						<div class="btn" aria-label="1">1</div>
						<div class="btn" aria-label="2">2</div>
						<div class="btn" aria-label="3">3</div>
					</div>
            </div>
        )
    }
}  

export default App
