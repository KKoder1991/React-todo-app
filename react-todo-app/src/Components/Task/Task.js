import './Task.css';

import React from 'react';

export default class Task extends React.Component{
    render(){
        return(
            <div className="task-container">
                <div className="task-title">
                    <h2>Task 1</h2>
                </div>
                <div className="task-buttons">
                    <button className="completed-button">+</button>
                    <button className="delete-button">-</button>
                </div>
            </div>
        )
    }
}