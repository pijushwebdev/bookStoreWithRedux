const initialState = {
    status: 'All'
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'filter/status' :
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;