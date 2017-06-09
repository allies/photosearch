import { combineReducers } from 'redux';
import { ADD_PAGE, CHANGE_PAGE } from '../actions/actions';
import { Size } from '../components/searchbox';

const initialState = {
  from: 0,
  results: []
}

function navigate(state = initialState, action) {
    switch(action.type) {
        case ADD_PAGE:
           return [...state, {
               from: action.from + Size,
               results: action.results
           }]
        case CHANGE_PAGE:
            return [...state, {
                path: action.path
            }]
        default:
            return state
    }
}

const Nav = combineReducers({
    navigate
})

export default Nav