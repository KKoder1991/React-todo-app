import React from 'react';
import Task from '../Task/Task';

import './TasksList.css';

export default class TasksList extends React.Component{
    render(){
        return(
            <div className="tasks-lists-container">
                <div className='tasks-list'>
                    { this.props.tasks.map(task => 
                                                        <Task key={task.key}   
                                                        text={task.text} 
                                                        id={task.id} 
                                                        removeTask={this.props.removeTask}/>)}
                </div>
            </div>
        )
    }
}