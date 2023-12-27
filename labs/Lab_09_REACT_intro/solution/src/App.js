import './logo.svg';
import './App.css';
import Counter from './Counter';
import PostList from './PostList';
import PostListWithAddDelete from './PostListWithAddDelete';
import PostListWithTags from './PostListWithTags';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				{/* <Counter /> */}
        {/* <PostList /> */}
				{/* <PostListWithAddDelete /> */}
				<PostListWithTags />
      </header>
    </div>
  );
}

export default App;
