import React, {Component} from 'react'
import EditUser from './EditUser/index'


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
                <div className="col-md-12" style={{padding: '40px', paddingRight: '0px', borderBottom: '1px solid rgba(148, 159, 172, 0.4)'}}>
                    <img className="float-left" src={user.image} width="80" height="80" alt="..."/>
                    <div className="caption float-left" style={{paddingLeft: '30px'}}>
                        <h3>
                            {user.name}
                        </h3>
                        <p className='text-muted'>
                            Дата регистрации: {(new Date(user.date)).toDateString()}
                        </p>
                    </div>
                    <div className="btn-group-vertical float-right">
                        <button type="button" class="btn btn-primary" onClick={this.modalToggle}>
                            Редактировать
                        </button>
                        {this.renderModal()}
                        <button type="button" class="btn btn-default">
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}



export default UserCard