import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
  return (
    <Router>
      <div>
        <Categories />
        <Routes>
          <Route path="/:category?" element={<NewsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
