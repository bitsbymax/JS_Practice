import {Component} from "react";
import {ColorPicker} from "./ColorPicker";

class App extends Component {
  state = {
    selectedColor: '',
    colors: ['red', 'green', 'blue'],
  }

  setColor = (color) => {
    this.setState({
      selectedColor: color,
    });
  };

  render() {
    const {selectedColor, colors} = this.state;

    return (
      <div className="App">
        <h1 style={{color: selectedColor}}>
          {selectedColor || 'No color selected'}
        </h1>
        <ColorPicker
          colors={colors}
          value={selectedColor}
          onChange={color => {
            this.setColor(color);
          }}
        />
        <select
          value={selectedColor}
          onChange={event => {
            this.setColor(event.target.value);
          }}
        >
          <option value="">Choose a color</option>
          {colors.map(color => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
