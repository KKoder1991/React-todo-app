import React from 'react';
import './SubmitForm.css';

export default class SubmitForm extends React.Component{

    constructor(props){
        super(props);
        this.state = { tasksCount: 0};

        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                id: this.state.tasksCount,
                key: Date.now()
            };

            this.props.addTask(newItem);

            this.state.tasksCount++;
            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    render(){
        return(
            <div className='submit-form-container'>
                <form className="submit-form">
                    <input className="input" type="text" placeholder="Add a task"></input>
                    <button className="submit-button" type="submit">Add</button>
                </form>
            </div>
        )
    }
}