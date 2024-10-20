import React from 'react';
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

    const handleAddToReadingList = (bookId) => {
        dispatch(addToReadingList(bookId));
        navigate('/reading-list');
    };

    return (
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
        </div>
    );
};

export default BookList;
