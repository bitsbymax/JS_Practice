// import React from 'react';
import './App.scss';

/* type AppState = {
  page: string;
};

type State = {
  value: number;
};

type Props = {
  name: string;
};

class Randomizer extends React.Component<Props, State> {
  state: State = {
    value: Math.random(),
  };

  componentDidMount() {
    // after 1st render
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.value !== prevState.value) {
      console.log('State updated');
    }

    if (this.props.name !== prevProps.name) {
      console.log('Props updated');
    }

    // after 2nd ...
  }

  componentWillUnmount() {
    // before remove
  }

  render() {
    console.log('Rendering');

    return (
      <button
        type="button"
        onClick={() => {
          this.setState({ value: Math.random() });
        }}
      >
        {this.props.name}
        {' : '}
        {this.state.value}
      </button>
    );
  }
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    page: 'randomizer',
  };

  setPage = (page: string) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;

    return (
      <div className="App">
        <nav>
          <button
            type="button"
            onClick={() => this.setPage('home')}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => this.setPage('randomizer')}
          >
            Randomizer
          </button>
        </nav>

        <Randomizer name={page} />
      </div>
    );
  }
}

export default App; */
