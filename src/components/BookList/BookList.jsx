import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToReadingList, removeFromReadingList } from '../../features/booksSlice';
import BookCard from '../BookCard/BookCard';
import './Booklist.css';

const BookList = ({ type }) => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    const navigate = useNavigate();
    const readingList = useSelector((state) => state.books.readingList);
    const list = type === 'allBooks' ? books : readingList;
    const [notification, setNotification] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleAddToReadingList = (bookId) => {
        dispatch(addToReadingList(bookId));
        setNotification(`Book Added to your reading list!`);
        setIsVisible(true);
    };

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div className="book-list-wrap">
            <h3 className="main-title">
                {type === 'allBooks' ? "All Books" : "My Books"}
            </h3>
            <div className="book-list">
                {list.length > 0 ? list.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        onAction={() =>
                            type === 'allBooks'
                                ? handleAddToReadingList(book.id)
                                : dispatch(removeFromReadingList(book.id))
                        }
                        actionLabel={type === 'allBooks' ? 'Add to Reading List' : 'Remove from List'}
                    />
                )) : <h2 className="empty-message">{type === 'allBooks' ? 'No books available' : 'Your reading list is empty'}</h2>
                }
                {isVisible && (
                    <div className="notification">
                        <p className="notification-text">{notification}</p>
                    </div>
                )}

            </div>
        </div>

    );
};

export default BookList;
