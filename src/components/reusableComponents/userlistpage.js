import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {usersPost} from '../redux/user/action';
import {logout} from '../utils/userlogin';
import { useHistory } from 'react-router-dom';
export default function Userlistpage() {
    const dispatch = useDispatch()
    const Posts = useSelector(state => state.Users.userPost)
    const history = useHistory()

    useEffect(() => {
        dispatch(usersPost())
    }, [])
  const  OnSubmit=()=>{

        logout();
        history.push('/')
    }

    return (
        <React.Fragment>
            <h2>User Post List</h2>
            <button type='button' onClick={OnSubmit}>Logout</button>

            {
                Posts.map((post , index) =>{
                return <div key={index}>{post.id}|{post.title}</div>
                        
                    
                })
            }    

            </React.Fragment>
    )
}
