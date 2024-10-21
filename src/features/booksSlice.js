import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json';

const storedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];

const initialState = {
    books: booksData,
    readingList: storedReadingList,
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
                localStorage.setItem('readingList', JSON.stringify(state.readingList));
            }
        },
        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter((book) => book.id !== action.payload);
            localStorage.setItem('readingList', JSON.stringify(state.readingList));
        },
    },
});

export const { addToReadingList, removeFromReadingList } = booksSlice.actions;
export default booksSlice.reducer;
