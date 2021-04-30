import React from 'react';
import './SubmitForm.css';

export default class SubmitForm extends React.Component{
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