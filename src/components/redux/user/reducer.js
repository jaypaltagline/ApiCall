import { request } from "../../reusableComponents/Api";

const initialState = {
    userPost:[],
    userList: [],
    login: {
        email: {
            label: 'email:',
            type: 'Email',
            value: ''
        },
        username: {
            label: 'Password:',
            type: 'Password',
            value: ''
        },
    },
    status: ''
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ONCHANGE':
            const { name, value } = action.payload;
            const loginClone = { ...state.login }
            loginClone[name].value = value;
            return {
                ...state,
                login: loginClone
            }
        case 'FETCHED_USERS_LIST_SUCCESS':
            return {
                ...state,
                userList: action.payload
            };
           case 'FETCHED_USERS_POST_SUCCESS':
               return{
                   ...state,
                   userPost:action.payload

               }    

        case 'SUBMIT':
            const { email: emailValue, username: password } = { ...state.login }
            const userListClone = [...state.userList]
            let status = 'failed';
            console.log('userList', userListClone)
            const response = userListClone.filter(({ username, email }) => email === emailValue.value && username === password.value)
            console.log('response', response)
            if (response.length > 0) {
                status = 'success'
            }

            return {
                ...state,
                status,

            }

        default:
            return state;
    }
}
export default UserReducer;
