
import fetchBooks from "./fetchBook";


const editingBook = (book) => {
    return async (dispatch) => {
         await fetch(`http://localhost:9000/books/${book.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                ...book
            })
        });

        dispatch(fetchBooks)
    }
}

export default editingBook;