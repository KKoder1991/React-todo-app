import React from 'react';
import SubmitForm from '../SubmitForm/SubmitForm';
import './App.css';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header>
          <h1>Kono's To Do list</h1>
        </header>
        <SubmitForm />
        
      </div>
    );
  }
}
