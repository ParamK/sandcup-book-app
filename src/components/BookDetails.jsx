// src/components/BookDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const book = useSelector((state) => state.books.books.find((book) => book.id === parseInt(id)));

    if (!book) return <p>Book not found!</p>;

    return (
        <div className="book-details">
            <h1>{book.title}</h1>
            <img src={book.coverImage} alt={book.title} />
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetails;
