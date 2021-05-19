import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
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
                console.log(error)
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

export const fetchArchiveFailure = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}
