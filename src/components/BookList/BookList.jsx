import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToReadingList, removeFromReadingList } from '../../features/booksSlice';
import BookCard from '../BookCard/BookCard';
import './Booklist.css';

const BookList = ({ type }) => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    const readingList = useSelector((state) => state.books.readingList);
    const list = type === 'catalog' ? books : readingList;

    return (
        <div className="book-list">
            {list.length > 0 ? list.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onAction={() =>
                        type === 'catalog'
                            ? dispatch(addToReadingList(book.id))
                            : dispatch(removeFromReadingList(book.id))
                    }
                    actionLabel={type === 'catalog' ? 'Add to Reading List' : 'Remove from Reading List'}
                />
            )) : <p>No books to display.</p>}
        </div>
    );
};

export default BookList;
