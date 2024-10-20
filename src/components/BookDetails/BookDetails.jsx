import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    const book = useSelector((state) => state.books.books.find((book) => book.id === parseInt(id)));

    if (!book) return <p>Book not found!</p>;

    return (
        <div className="book-details">
            <div className="book-details-wrapper">
                <div className="book-thumbnail">
                    <img className="thumbnail-image" src={book.thumbnail} alt={book.title} />
                </div>
                <div className="book-info">
                    <h2 className="book-title">{book.title}</h2>
                    <span className="book-author">{book.author}</span>
                    <p className="book-description">{book.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
