import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reading-list" element={<BookList type="readingList" />} />
          <Route path="/book/:id" element={<BookDetails />} /> {/* Updated usage */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
