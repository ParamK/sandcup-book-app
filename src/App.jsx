import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/BookList/BookList';
import Navigation from './components/Navigation/Navigation';
import './App.css'

function App() {

  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reading-list" element={<BookList type="readingList" />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
