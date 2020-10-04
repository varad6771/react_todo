import _ from 'lodash';
import {
    ADD_TODO, DELETE_TODO, EDIT_TODO,
    GET_TODO, GET_TODOS
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case GET_TODO:  // all three share same code so this way code needs
        case ADD_TODO:// to be written only once and will be used for all three
        case EDIT_TODO:// need to checkout the actual behaviour
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_TODO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
