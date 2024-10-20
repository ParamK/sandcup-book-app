import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json';

// Load the initial reading list from localStorage, or default to an empty array
const storedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];

const initialState = {
    books: booksData,
    readingList: storedReadingList, // Use the stored reading list on page load
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addToReadingList: (state, action) => {
            const book = state.books.find((book) => book.id === action.payload);
            const alreadyInList = state.readingList.some((item) => item.id === action.payload);

            if (!alreadyInList) {
                state.readingList.push(book);
                // Update localStorage
                localStorage.setItem('readingList', JSON.stringify(state.readingList));
            }
        },
        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter((book) => book.id !== action.payload);
            // Update localStorage
            localStorage.setItem('readingList', JSON.stringify(state.readingList));
        },
    },
});

export const { addToReadingList, removeFromReadingList } = booksSlice.actions;
export default booksSlice.reducer;
