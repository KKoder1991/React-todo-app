import React from 'react';
import SubmitForm from '../SubmitForm/SubmitForm';
import TasksList from '../TasksList/TasksList';
import './App.css';

const config = {
  apiKey: "AIzaSyCwAc4Fi4ghor7hyaf5YWjWsWKV2wSBnPc",
  authDomain: "to-do-list1991.firebaseapp.com",
  projectId: "to-do-list1991",
  storageBucket: "to-do-list1991.appspot.com",
  messagingSenderId: "462733111573",
  appId: "1:462733111573:web:ae1fd06f020330db9b791c",
  measurementId: "G-KBBY27D4Q3"
}

export default class App extends React.Component{

  constructor(props){
    super(props);
      this.state = {tasks: []}

      this.addTask = this.addTask.bind(this);
      this.removeTask = this.removeTask.bind(this);
    }

  addTask(task){
      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.concat(task)
        };
      });
    }

    removeTask(id){
        const tasks = this.state.tasks.filter(element => (element.id !== id));
        this.setState({ tasks: tasks });
      }

  render(){
    return (
      <div className="App">
        <header>
          <h1>To Do list</h1>
        </header>
        <SubmitForm addTask={this.addTask}/>
        <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}
