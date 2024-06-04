import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PostListPage, PostDetailPage, EditorPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<PostListPage />}
        />
        <Route
          path='/posts/:id'
          element={<PostDetailPage />}
        />
        <Route
          path='/write'
          element={<EditorPage />}
        />
        <Route
          path='/write/:id'
          element={<EditorPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
