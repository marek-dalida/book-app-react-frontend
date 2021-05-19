import {FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS} from "./types";

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
        default:
            return state;

    }
}

export default booksReducer;
