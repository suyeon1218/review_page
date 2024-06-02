import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PostListPage, PostDetailPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<PostListPage />}></Route>
        <Route
          path='/posts/:id'
          element={<PostDetailPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
