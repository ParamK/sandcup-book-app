import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json';

const initialState = {
    books: booksData,
    readingList: JSON.parse(localStorage.getItem('readingList')) || [],
    notification: null, // New state for notification
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
                state.notification = `Added "${bookToAdd.title}" to your reading list!`; // Set notification
            }
        },
        removeFromReadingList: (state, action) => {
            const bookId = action.payload;
            state.readingList = state.readingList.filter((book) => book.id !== bookId);
            localStorage.setItem('readingList', JSON.stringify(state.readingList));
            state.notification = null; // Clear notification when removing
        },
        clearNotification: (state) => {
            state.notification = null; // Action to clear notification
        },
    },
});

export const { addToReadingList, removeFromReadingList, clearNotification } = booksSlice.actions;
export default booksSlice.reducer;
