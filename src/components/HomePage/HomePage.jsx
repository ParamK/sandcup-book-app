import React from 'react';
import BookList from '../BookList/BookList';

const HomePage = () => {
    return (
        <React.Fragment>
            <BookList type="catalog" />
        </React.Fragment>
    );
};

export default HomePage;
