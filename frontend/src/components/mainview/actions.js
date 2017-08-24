import usersList from './data';

export const SELECT_USER = 'SELECT_USER';
export const GET_USER_LIST = 'GET_USER_LIST';

export function getUserList() {
    return {
        type: GET_USER_LIST,
        payload: {
            usersList
        }
    }   
}

export function selectUser(user) {
    return {
        type: SELECT_USER,
        payload: {
            user
        }
    }
}