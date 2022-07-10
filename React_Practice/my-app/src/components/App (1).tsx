// import React from 'react';
import './App.scss';

/* type AppState = {
  page: string;
};

type State = {
  value: number;
};

class Randomizer extends React.Component<{}, State> {
  timerId?: number ;

  state: State = {
    value: Math.random(),
  };

  componentDidMount() {
    console.log('Mounted');

    this.timerId = setInterval(this.randomize, 1000);

    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    console.log('Unmounted');

    window.removeEventListener('resize', this.resizeHandler);

    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  resizeHandler = () => {
    console.log('Size changed');
  };

  randomize = () => {
    const newValue = Math.random();
    console.log(newValue);
    this.setState({ value: newValue });
  };

  render() {
    return <p>Value: {this.state.value}</p>;
  }
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    page: 'home',
  };

  setPage = (page: string) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;

    return (
      <div className="App">
        <h1>Current page is {page}</h1>
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

        {page === 'home' ? (
          <h1>Home page</h1>
        ) : (
          <Randomizer />
        )}
      </div>
    );
  }
}

export default App; */
