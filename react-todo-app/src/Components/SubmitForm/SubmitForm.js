import React from 'react';
import './SubmitForm.css';

export default class SubmitForm extends React.Component{
    render(){
        return(
            <div className='submit-form-container'>
                <form className="submit-form">
                    <input type="text" placeholder="Add a task"></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}