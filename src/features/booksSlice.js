import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json';

const initialState = {
    books: booksData,
    readingList: JSON.parse(localStorage.getItem('readingList')) || [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addToReadingList: (state, action) => {
            const bookId = action.payload;
            const bookToAdd = state.books.find((book) => book.id === bookId);

            const alreadyInReadingList = state.readingList.some((book) => book.id === bookId);

            if (!alreadyInReadingList && bookToAdd) {
                state.readingList.push(bookToAdd);
                localStorage.setItem('readingList', JSON.stringify(state.readingList));
            }
        },
        removeFromReadingList: (state, action) => {
            const bookId = action.payload;
            state.readingList = state.readingList.filter((book) => book.id !== bookId);
            localStorage.setItem('readingList', JSON.stringify(state.readingList));
        }
    },
});

export const { addToReadingList, removeFromReadingList } = booksSlice.actions;
export default booksSlice.reducer;
