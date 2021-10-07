import React from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../features/userManagement/user'

export const Login = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch(getData())}>Login</button>
            <br/>
            <button onClick={()=> dispatch(getData())}>Logout</button>
        </div>
    )
}

export default Login
