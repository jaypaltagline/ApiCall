import { request } from '../../reusableComponents/Api';
export const usersList = () => async dispatch => {
    const response = await request('GET', 'users')
    if (response.length > 0) {
        dispatch({
            type: 'FETCHED_USERS_LIST_SUCCESS',
            payload: response
        })
    }
}
export const usersPost = () => async dispatch => {
    const response = await request('GET', 'posts')
    if (response.length > 0) {
        dispatch({
            type: 'FETCHED_USERS_POST_SUCCESS',
            payload: response
        })
    }
}
export const onChange = (payload) => {
    return {
        type: 'ONCHANGE',
        payload
    };
};
export const submit = (payload) => {
    return {
        type: 'SUBMIT',
        payload
    }
}
