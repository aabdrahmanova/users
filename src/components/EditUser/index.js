import React, {Component} from 'react'
import './style.css'

export class EditUser extends Component {
    render() {
        return (
            <div className="modal">
                <div>
                   <form action="/edit" method="post">
                      <h2>Редактирование пользователя</h2>
                        <label>Email</label>
                        <input type="email"/>
                        <label>Имя</label>
                        <input type="text"/>
                        <label>Пароль</label>
                        <input/>
                        <div className="btns">
                            <button className="btn" onClick={this.props.closeModal}>Отмена</button> 
                            <input type="submit" name="submit" className="sbmt" value="Создать"/>
                        </div>
                    </form> 
                </div>
            </div>
        )
    }
}