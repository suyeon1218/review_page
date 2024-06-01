import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ListPage, DetailPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<ListPage />}></Route>
        <Route
          path='/posts/:id'
          element={<DetailPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
