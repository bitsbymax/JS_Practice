import {Component} from 'react'
import './App.css'
import {UsersList} from './components/UsersList';
import {NewUserForm} from './components/NewUserForm';

const usersFromServer = [
  {id: 1, name: 'Roma'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Max'},
]

class App extends Component {
  state = {
    users: usersFromServer,
  };

  addUser = (name) => {
    this.setState(state => {
      const newUser = {
        id: state.users.length + 1,
        name,
      };

      return {
        users: [...state.users, newUser],
      };
    })
  }

  deleteUser = (userId) => {
    this.setState(state => ({
      users: state.users.filter(
        user => user.id !== userId
      ),
    }))
  }

  renameUser = (userId, name) => {
    this.setState(state => ({
      users: state.users.map(user => {
        if (user.id !== userId) {
          return user;
        }

        return { ...user, name };
      }),
    }));
  };

  render() {
    const { users } = this.state;
    const {
      deleteUser,
      renameUser,
    } = this;
    return (
      <div className="App">
        <h1>Words list</h1>

        <NewUserForm
          onAdd={this.addUser}
        />
        <UsersList
          users={users}
          onDelete={deleteUser}
          onRename={renameUser}
        />
      </div>
    )
  }
}

export default App;
