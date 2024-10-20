import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, onAction, actionLabel }) => {

    return (
        <div className="card-item">
            <Link to={`/book/${book.id}`}>
                <div className="card-thumbnail">
                    <img src={book.thumbnail} alt={book.title} className="image" />
                </div>
                <div className="card-content">
                    <h2 className="title">{book.title}</h2>
                    <p className="author">{book.author}</p>
                </div>
            </Link>
            <div className="card-footer">
                <button className="btn btn-add" onClick={onAction}>
                    <span className="btn-text">{actionLabel}</span>
                </button>
            </div>
        </div>
    );
};

export default BookCard;
