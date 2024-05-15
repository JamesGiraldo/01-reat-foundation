import React, { useEffect } from 'react'
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status);
    const user = useAuthStore(state => state.user);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500);
    }, [])


    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <h3>Login Page</h3>
            {
                (authStatus === 'authenticated')
                    ? <h3>Autenticado Como: {JSON.stringify(user, null, 2)}</h3>
                    : <h3>No Autenticado</h3>
            }
            {
                (authStatus === 'authenticated')
                    ? <button onClick={() => logout()}>Logout</button>
                    : <button onClick={() => login('jamesgiiraldo@gmail.com', '123')}>Login</button>
            }

        </>
    )
}
