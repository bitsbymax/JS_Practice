import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    words: ['one', 'two', 'three', 'four', 'five'],
  }

  clickHandler = (word) => {
    console.log(word);
  }

  render() {
    const { words } = this.state;

    return (
      <div className="App">
        <ul>
          {words.map(word => (
            <li key={word} onClick={() => {
              this.clickHandler(word);
            }}
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
