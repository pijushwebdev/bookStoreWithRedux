import { ADDED, DELETED, EDIT, LOADED } from "./actionType"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books
    }
}


export const booksAdded = (bookInfo) => {
    return {
        type: ADDED,
        payload: bookInfo
    }
}
export const bookDeleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}

export const editBook = (book) => {
    return {
        type: EDIT,
        payload: book
    }
}

