import React from 'react';
import BookList from '../BookList/BookList';

const HomePage = () => {
    return (
        <React.Fragment>
            <BookList type="allBooks" />
        </React.Fragment>
    );
};

export default HomePage;
