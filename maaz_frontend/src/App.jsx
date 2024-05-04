import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetBooks from './components/GetBooks';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<GetBooks />} />
          <Route path="/:id" element={<BookDetails />} />
        </Routes>
      </Router>
   
  );
};

export default App;
