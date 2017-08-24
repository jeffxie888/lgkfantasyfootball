import {
    GET_USER_LIST,
    SELECT_USER
} from './actions';

import data from './data';


const initialState = {
    selectedUser: data[0],
    usersList: data
}

export default function mainReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_LIST: {
            let usersList = action.payload.usersList;
            return {...state, usersList}
        }
        case SELECT_USER: {
            let selectedUser = action.payload.user;
            return {...state, selectedUser}
        }
        default: {
            return state;
        }
    }
}