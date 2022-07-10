import { Component } from 'react';
import {QuantitySelector} from './QuantitySelector';

class App extends Component {
  state = {
    studentsCount: 800,
    employeesCount: 30,
  }

  addStudent = () => {
    this.setState(state => ({
      studentsCount: state.studentsCount + 1,
    }))
  }

  removeStudent = () => {
    this.setState(state => ({
      studentsCount: state.studentsCount - 1,
    }))
  }

  addEmployee = () => {
    this.setState(state => ({
      employeesCount: state.employeesCount + 1,
    }))
  }

  removeEmployee = () => {
    this.setState(state => ({
      employeesCount: state.employeesCount - 1,
    }))
  }

  render() {
    const {
      studentsCount,
      employeesCount,
    } = this.state;

    return (
      <div className="App" >
        <h1>Mates count:
          {studentsCount + employeesCount}
        </h1>

        <QuantitySelector
          title="Students"
          quantity={studentsCount}
          onRemove={this.removeStudent}
          onAdd={this.addStudent}
        />

        <QuantitySelector
          title="Employees"
          quantity={employeesCount}
          onRemove={this.removeEmployee}
          onAdd={this.addEmployee}
        />
      </div>
    );
  }
}

export default App;
