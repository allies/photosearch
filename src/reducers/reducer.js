import { combineReducers } from 'redux';
import { ADD_PAGE } from '../actions/actions';

export const initialState = {
  results: [],
  notFound: true
}

function navigate(state = initialState, action) {
    switch(action.type) {
        case ADD_PAGE:
           return [...state, {
               results: action.results,
               notFound: action.notFound
           }]
        default:
            return state
    }
}

const Nav = combineReducers({
    navigate
})

export default Nav