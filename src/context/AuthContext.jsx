import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuthenticated') === 'true'
        if (isAuth) {
            setIsAuthenticated(true)
            setUserName(localStorage.getItem('userName'))
            setRole(localStorage.getItem('role'))
            navigate('/')
        }
    }, [])


    const login = async (event) => {
        event.preventDefault()

        try {
            const res = await fetch('/data/users.json')
            const users = await res.json();

            const findUser = users.find((us) => us.username === userName && us.password === password)

            if (!findUser) {
                setErrors({ userName: 'Credenciales no válidas' });
            }
            else {
                setUserName(findUser.username)
                setPassword(findUser.password)
                setRole(findUser.role)
                setIsAuthenticated(true)
                localStorage.setItem('isAuthenticated', true)
                localStorage.setItem('userName', findUser.username)
                localStorage.setItem('role', findUser.role)

                if (findUser.role === 'admin') {
                    navigate('/adminproducts');
                }
                else {
                    navigate('/');
                }
            }
        }
        catch (error) {
            setErrors({ userName: 'Algo salió mal. Por favor, inténtelo de nuevo más tarde.' });
        }
    }

    const logout = () => {
        setUserName("")
        setPassword("")
        setRole("")
        setErrors({})
        setIsAuthenticated(false)
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userName')
        localStorage.removeItem('role')
    }

    return (
        <AuthContext.Provider
            value={
                {
                    isAuthenticated, setIsAuthenticated, userName, setUserName, password, setPassword, role, errors, login, logout
                }
            }>
            {children}
        </AuthContext.Provider>
    )
}
