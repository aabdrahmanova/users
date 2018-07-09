import React, {Component} from 'react'
import './style.css'

export class CreateUser extends Component {
    state = {
        isOpen: true
    }
    render() {
        return (
            <div className="modal">
                <div>
                   <form action="/create" method="post">
                      <h2>Создание пользователя</h2>
                        <label>Email</label>
                        <input type="email"/>
                        <label>Имя</label>
                        <input type="text"/>
                        <label>Пароль</label>
                        <input/>
                        <div className="btns">
                            <button className="btn">Отмена</button> 
                            <input type="submit" name="submit" className="sbmt" value="Создать"/>
                        </div>
                    </form> 
                </div>
            </div>
        )
    }
}