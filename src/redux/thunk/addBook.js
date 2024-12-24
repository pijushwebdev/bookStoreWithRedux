import { booksAdded } from "../booksSlice/action";


const addBook = (bookInfo) => {
    return async (dispatch, getState) => {

        const state = getState().books.books;

        const nextId = (state) => {
            const maxId = state.reduce((maxId, currentState)=> Math.max(maxId, currentState.id), -1);
            return maxId + 1;
        }

        const res = await fetch(`http://localhost:9000/books`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                ...bookInfo,
                id: nextId(state),
            })
        });

        const book = await res.json();
        dispatch(booksAdded(book));
    }
}

export default addBook;