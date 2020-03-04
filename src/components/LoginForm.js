import React, { useEffect } from 'react'
import Logininput from './reusableComponents/logininput';
import { useSelector, useDispatch } from 'react-redux'
import { onChange } from './redux/user/action';
import { usersList } from './redux/user/action';
import { useHistory } from 'react-router-dom';
import { submit } from './redux/user/action';
import { login } from './utils/userlogin';

export default function LoginForm() {
    const login1 = useSelector(state => state.Users.login)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(usersList())
    }, [])
    const handle_change = (e) => {
        dispatch(onChange({ name: e.target.name, value: e.target.value }))
    }
    const OnSubmit = (e) => {
        dispatch(submit())
        login();
        history.push('/Userlistpage')
        
    }


    const UserDAta = Object.values(login1).map(({ label, type, value }, index) => {
        const name = Object.keys(login1)[index]
        return (
            <div key={index}>
                <Logininput  {...{ label, type, value, name }} onChange={handle_change} />
            </div>
        )
    })

    return (
        <div>
            <h2>Redux Dynamic Login Demo</h2>
            {UserDAta}
            
            <button type='button' onClick={OnSubmit}>Login</button>
        </div>

    )

}








