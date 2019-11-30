import { combineReducers} from 'redux'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                }
            ]
        case 'GET_ALL_TODO':
            return state
        default:
            return state
    }
}

export default combineReducers({
    todos
});