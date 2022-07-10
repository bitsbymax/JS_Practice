import React from 'react';
import { AddColorForm } from './components/AddColorForm';
import { ColorsList } from './components/ColorsList';

export interface Color {
  id: number;
  name: string;
  hex: string;
}

type AppState = {
  colors: Color[],
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    colors: [
      { id: 1, name: 'red', hex: '#FF0000' },
    ],
  };

  addColor = (name: string, hex: string) => {
    const newColor = {
      id: this.state.colors.length + 1,
      name,
      hex,
    };

    this.setState(({ colors }) => {
      return {
        colors: [...colors, newColor],
      };
    });
  };

  removeColor = (colorId: number) => {
    this.setState((prevState) => ({
      colors: prevState.colors.filter(
        color => color.id !== colorId,
      ),
    }))
  }

  render() {
    return (
      <div className="App">
        <AddColorForm onSave={this.addColor} />
        <ColorsList
          colors={this.state.colors}
          onRemove={this.removeColor}
        />
      </div>
    );
  }
}

export default App;
