const initialWords = ["one", "two"];

const initialState = {
  title: "Title 1",
  words: initialWords
};

export const app = {
  state: initialState,
  showWords() {
    return this.state.words.join("-");
  },
  addWord(word) {
    this.setState({
      words: [...this.state.words, word]
    })
  },
  setTitle(title) {
    this.setState({ title })
  },
  render() {
    const { title, words } = this.state;

    return `
      <div>
        <h1>${title}</h1>
        <ul>
          ${words.map(word => `
            <li>${word}</li>
          `).join('')}
        </ul>
      </div>
    `;
  },
  forceUpdate() {
    document.body.innerHTML = this.render();
  },
  setState(stateUpdate) {
    this.state = {
      ...this.state,
      ...stateUpdate,
    };

    this.forceUpdate();
  },
};

/* app.forceUpdate();

setTimeout(() => {
  app.setTitle('Hello, Mate')
}, 1000);

setTimeout(() => {
  app.addWord(123);
}, 3000);

setTimeout(() => {
  app.addWord(567);
}, 6000); */
