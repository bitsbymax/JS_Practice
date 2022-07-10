import ReactDOM from 'react-dom';
import { Comment } from './Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);

/* import App from './App';

const ReactDOM = {
  render(App, element) {
    const app1 = new App();
    const html = app1.render();

    if (app1.componentDidMount) {
      app1.componentDidMount()
    }

    button.addEventListener('click', () => {
      app1.setState({ page: 'home' });

      app1.state.page = 'home';
      app1.render();

      if (randomizer1 is not on the page) {
        if (randomizer1.componentWillUnmount) {
          randomizer1.componentWillUnmount();
        }
      }

      if (app1.componentDidUpdate) {
        app1.componentDidUpdate()
      }
    });

    element.innerHTML = html;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
); */
