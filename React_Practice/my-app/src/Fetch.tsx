// import React from 'react';
// import './App.scss';
// import './styles/general.scss';
// import { PostsList } from './components/PostsList';
// import { PostDetails } from './components/PostDetails';
// import { Post } from './types/post';
//
// async function getPosts(userId = 0): Promise<Post[]> {
//   let postsURL = 'https://mate.academy/students-api/posts'
//
//   if (userId !== 0) {
//     postsURL += `?userId=${userId}`;
//   }
//
//   return fetch(postsURL)
//     .then(response => response.json());
// }
//
// type State = {
//   selectedUserId: number;
//   posts: Post[];
// };
// class App extends React.Component<{}, State> {
//   state: State = {
//     selectedUserId: 0,
//     posts: [],
//   };
//
//   componentDidMount() {
//     getPosts()
//       .then(postsFromServer => {
//         this.setState({ posts: postsFromServer });
//       });
//   }
//
//   componentDidUpdate(_: {}, prevState: State) {
//     const { selectedUserId } = this.state;
//
//     if (selectedUserId === prevState.selectedUserId) {
//       return;
//     }
//
//     getPosts(selectedUserId)
//       .then(postsFromServer => {
//         this.setState({ posts: postsFromServer });
//       });
//   }
//
//   render() {
//     const { posts, selectedUserId } = this.state;
//
//     return (
//       <div className="App">
//         <header className="App__header">
//           <label>
//             Select a user: &nbsp;
//
//             <select
//               className="App__user-selector"
//               value={selectedUserId}
//               onChange={event => {
//                 this.setState({
//                   selectedUserId: +event.target.value,
//                 });
//               }}
//             >
//               <option value="0">All users</option>
//               <option value="1">Leanne Graham</option>
//               <option value="2">Ervin Howell</option>
//               <option value="3">Clementine Bauch</option>
//               <option value="4">Patricia Lebsack</option>
//               <option value="5">Chelsey Dietrich</option>
//               <option value="6">Mrs. Dennis Schulist</option>
//               <option value="7">Kurtis Weissnat</option>
//               <option value="8">Nicholas Runolfsdottir V</option>
//               <option value="9">Glenna Reichert</option>
//               <option value="10">Leanne Graham</option>
//             </select>
//           </label>
//         </header>
//
//         <main className="App__main">
//           <div className="App__sidebar">
//             <PostsList posts={posts} />
//           </div>
//
//           <div className="App__content">
//             <PostDetails postId={} />
//           </div>
//         </main>
//       </div>
//     );
//   }
// }
//
// export default App;
