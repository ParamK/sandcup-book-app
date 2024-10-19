// src/components/HomePage.js
import React from 'react';
import BookList from './BookList';

const HomePage = () => {
    return (
        <div>
            <BookList type="catalog" />
        </div>
    );
};

export default HomePage;
