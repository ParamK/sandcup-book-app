// src/components/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onAction, actionLabel }) => {

    return (
        <div className="book-card">
            <Link to={`/book/${book.id}`}>
                <img src={book.thumbnail} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </Link>
            <button onClick={onAction}>{actionLabel}</button>
        </div>
    );
};

export default BookCard;
