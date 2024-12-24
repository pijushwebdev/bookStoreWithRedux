import { ADDED, DELETED, EDIT, LOADED } from "./actionType";

const initialState = {
    books: [],
    selectedBook: null
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOADED:
            return {...state, books : action.payload};
            
        case ADDED:
            
            return {
                ...state,
                books: [ ...state.books, action.payload]
            }
        case DELETED:
                                            
            return {...state, books : state?.books?.filter(book => book.id !== action.payload)}

        case EDIT:                                     
            return {
                ...state,
                selected: action.payload
            }
         
        default:
            return state
    }
}

export default bookReducer;