import React from 'react';
import Task from '../Task/Task';

import './TasksList.css';

export default class TasksList extends React.Component{
    render(){
        return(
            <div className="tasks-lists-container">
                <Task />
            </div>
        )
    }
}