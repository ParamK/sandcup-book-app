import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, onAction, actionLabel, readingList, isReadingListPage, className }) => {
    const [buttonText, setButtonText] = useState(actionLabel);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const alreadyInReadingList = readingList.some((item) => item.id === book.id);
        if (alreadyInReadingList && isReadingListPage === false) {
            setButtonText("Item Added");
            setIsDisabled(true);
        }
        else if (isReadingListPage) {
            setButtonText("Remove Item");
        }
        else {
            setButtonText(actionLabel);
            setIsDisabled(false);
        }
    }, [readingList, book.id, actionLabel]);

    const handleButtonClick = () => {
        onAction();
        setButtonText("Item Added");
        setIsDisabled(true);
    };

    return (
        <div className={`card-item ${className}`}>
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
                <button
                    className="btn btn-add"
                    onClick={handleButtonClick}
                    disabled={isDisabled}
                >
                    <span className="btn-text">{buttonText}</span>
                </button>
            </div>
        </div>
    );
};

export default BookCard;
