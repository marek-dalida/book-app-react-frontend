import {
    ADD_BOOK_FAILURE,
    ADD_BOOK_REQUEST,
    ADD_BOOK_SUCCESS, DELETE_BOOK_FAILURE, DELETE_BOOK_SUCCESS,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS
} from "./types";

const initialState = {
    isFetching: false,
    booksData: [],
    error: ''
}

const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                isFetching: false,
                booksData: action.payload,
                error: ''
            }
        case FETCH_BOOKS_FAILURE:
            return {
                isFetching: false,
                booksData: [],
                error: action.payload
            }
        case ADD_BOOK_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case ADD_BOOK_SUCCESS:
            return {
                isFetching: false,
                booksData: [...state.booksData, action.payload],
                error: ''
            }
        case ADD_BOOK_FAILURE || DELETE_BOOK_FAILURE:
            return {
                isFetching: false,
                booksData: state.booksData,
                error: action.payload
            }
        case DELETE_BOOK_SUCCESS:
            return {
                isFetching: false,
                booksData: state.booksData.filter(book => book.id !== action.payload.id),
                error: ''
            }
        default:
            return state;

    }
}

export default booksReducer;
