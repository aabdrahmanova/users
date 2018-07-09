import React, {Component} from 'react'
import './style.css'

class UserCard extends Component {
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
                        <button>Редактировать</button>
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
        )
    }

}



export default UserCard