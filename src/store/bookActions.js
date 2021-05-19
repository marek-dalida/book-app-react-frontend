import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE, ADD_BOOK_REQUEST, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE
} from "./types";
import api from "../api";

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch(fetchBookRequest)
        await api.get(`/dashboard`)
            .then(response => {
                const books = response.data
                dispatch(fetchBookSuccess(books))
            })
            .catch(error => {
                dispatch(fetchBookFailure(error))
            })
    }
}


export const fetchBookRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

export const fetchBookSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

export const fetchBookFailure = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

export const addBook = (book) => {
    return async (dispatch) => {
        dispatch(addBookRequest)
        await api.post(`/dashboard`, book)
            .then(response => {
                dispatch(addBookSuccess(response.data))
            })
            .catch(error => {
                dispatch(addBookFailure(error))
            })
    }
}

export const addBookRequest = () => {
    return {
        type: ADD_BOOK_REQUEST
    }
}

export const addBookSuccess = (book) => {
    return {
        type: ADD_BOOK_SUCCESS,
        payload: book
    }
}

export const addBookFailure = (error) => {
    return {
        type: ADD_BOOK_FAILURE,
        payload: error
    }
}
