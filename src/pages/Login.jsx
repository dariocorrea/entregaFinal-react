import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/styles/Login.css'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

    const { userName, setUserName, password, setPassword, errors, login } = useContext(AuthContext)

    return (
        <div className="row login">
            <form onSubmit={login}>
                <h2>Login</h2>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Ingrese Usuario"
                        value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    <label htmlFor="floatingInput">Ingrese Usuario</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Ingrese Password" autoComplete="off"
                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="floatingPassword">Ingrese Password</label>
                </div>
                {errors.userName && (
                    <div className="text-danger">
                        {errors.userName}
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login