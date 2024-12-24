import { combineReducers } from "redux";
import bookReducer from "./booksSlice/bookReducer";
import filterReducer from "./filterSlice/filterReducer";


const rootReducer = combineReducers({
    books: bookReducer,
    filters: filterReducer
});

export default rootReducer;