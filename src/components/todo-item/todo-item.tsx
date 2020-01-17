import React from 'react'
import { ITask } from '../../interfaces';
import './todo-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Context from '../../context/todo-context';
import {NavLink} from 'react-router-dom';

interface Config {
    task: ITask;
}

const TodoItem: React.FC<Config> = ({ task }) => {
    const { remove, edit, add } = React.useContext(Context);
    return (
        <li className="todo-item">
            <div className="cell todo-item__id">{task.id} </div>
            <div className="cell todo-item__title">{task.title} </div>
            <div className="cell todo-item__actions">
                <NavLink to={`/edit/${task.id}`} className="btn_pos">
                <button className="btn btn_success"><FontAwesomeIcon icon={faPen} className="fa-icon" /></button>
                </NavLink>
                <button className="btn btn_danger" onClick={() => remove(task.id)}><FontAwesomeIcon icon={faTrashAlt} className="fa-icon" /></button>
            </div>
        </li>
    )
}

export default TodoItem;