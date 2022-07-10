import './App.css';
import { Component } from 'react';
import { FriendsList } from "./components/FriendsList";
import { AddElToObj } from "./components/AddElToObj";
import { RemoveElFromObj } from "./components/RemoveElFromObj";
import { UpdatePropInObj } from './components/UpdatePropInObj';


class App extends Component {
  state = {
    age: 0,
    friends: ['Misha', 'Maksym', 'Olya'],
    friends2: [
      { id: 1, name: 'Misha', age: 25 },
      { id: 2, name: 'Maksym', age: 26 },
      { id: 3, name: 'Olya', age: 28 },
    ],
  };

  addYear = () => {
    //якщо ми, оновлюючи стан, не використовуємо дані з переперднього state, то можна використовувати об'єктну форму:
    //this.setState({ y: 10 });

    //якщо для обчислення нового стану ми викор. дані з попереднього стану, то завжди потрібно викор.
    // функціональну форму setState:
    this.setState((state) => ({
      age: state.age + 1,
    }));
  };

  addFriend = () => {
    this.setState(state => ({
      // DO NOT mutate the state!
      friends: [
        ...state.friends,
        Math.random(),
      ],
    }))
  }

  addFriendToObj = () => {
    const newFriend = {
      id: 4,
      name: 'Tanya',
      age: 30,
    };

    this.setState(state => {
      const newFriends = [...state.friends2];

      newFriends.splice(2, 0, newFriend);

      return { friends2: newFriends };
    })
  }

  removeFriend = () => {
    const friendId = 1;

    this.setState(state => ({
      friends2: state.friends2.filter(
        friend => friend.id !== friendId
      ),
    }))
  }

  updateFriend = () => {
    const friendId = 1;
    const newAge = 99;

    this.setState(state => ({
      friends2: state.friends2.map(
        friend => {
          if (friend.id !== friendId) {
            return friend;
          }

          return {
            ...friend,
            age: newAge,
          };
        }
      ),
    }))
  }

  render() {
    const { age } = this.state;
    const { friends } = this.state;
    const { friends2 } = this.state;

    return (
      <div className="App">
        <h1>Age is {age}</h1>
        <button type='button' onClick={this.addYear}>
          Add a year!
        </button>
        <button type='button' onClick={() => {
          this.addYear();
          this.addYear();
          this.addYear();
        }}>
          Add 3 years!
        </button>


        <h2>Friends</h2>
        <FriendsList friends={friends} />
        <button type='button' onClick={this.addFriend}>
          Add a friend!
        </button>


        <h2>Reversed friends</h2>
        (//How to avoid array mutation:)
        <FriendsList friends={[...friends].reverse()} />


        <button type='button' onClick={this.addFriendToObj}>
          Add a friend to obj!
        </button>
        (//How to add an element without mutation:)
        <AddElToObj friends2={friends2} />


        <button type='button' onClick={this.removeFriend}>
          Remove a friend from obj!
        </button>
        <RemoveElFromObj friends2={friends2} />


        <button type='button' onClick={this.updateFriend}>
          Update a friend from obj!
        </button>
        <UpdatePropInObj friends2={friends2} />
      </div>
    );
  };
}

export default App;
