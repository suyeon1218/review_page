import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ROUTER } from './constants';
import { PostsPage, PostDetailPage, EditorPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTER.POSTS}
          element={<PostsPage />}
        />
        <Route
          path={ROUTER.POST_DETAIL}
          element={<PostDetailPage />}
        />
        <Route
          path={ROUTER.WRITE}
          element={<EditorPage />}
        />
        <Route
          path={ROUTER.EDIT}
          element={<EditorPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
