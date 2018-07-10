import React, {Component} from 'react'
import './style.css'
import {EditUser} from '../EditUser';

class UserCard extends Component {
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
		return this.state.modal ? <EditUser closeModal={this.modalToggle} /> : '';
	}
    render() {
        const {user} = this.props
        return (
            <div className="row">
                <div className="col">
                    <img className="image" src={user.image} alt="..."/>
                    <div className="caption">
                        <h3>
                            {user.name}
                        </h3>
                        <p>
                            Дата регистрации: {(new Date(user.date)).toDateString()}
                        </p>
                        <button onClick={this.modalToggle}>Редактировать</button>
                        {this.renderModal()}
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
        )
    }

}



export default UserCard