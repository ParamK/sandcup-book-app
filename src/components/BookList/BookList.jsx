import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToReadingList, removeFromReadingList } from '../../features/booksSlice';
import BookCard from '../BookCard/BookCard';
import './BookList.css';

const BookList = ({ type }) => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    const readingList = useSelector((state) => state.books.readingList);
    const list = type === 'allBooks' ? books : readingList;
    const isReadingListPage = location.pathname === '/reading-list';

    const [fadeOutId, setFadeOutId] = useState(null);

    const handleRemove = (bookId) => {
        setFadeOutId(bookId);
        setTimeout(() => {
            dispatch(removeFromReadingList(bookId));
        }, 500);
    };

    const handleAddToReadingList = (bookId) => {
        dispatch(addToReadingList(bookId));
    };
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
                        className={fadeOutId === book.id ? 'fade-out' : ''}
                        readingList={readingList}
                        isReadingListPage={isReadingListPage}
                        onAction={() => (type === 'allBooks' ? handleAddToReadingList(book.id) : handleRemove(book.id))}
                        actionLabel={type === 'allBooks' ? 'Add to Reading List' : 'Remove from List'}
                    />
                )) : <h2 className="empty-message">{type === 'allBooks' ? 'No books available' : 'Your reading list is empty'}</h2>
                }
            </div>
        </div>

    );
};

export default BookList;
