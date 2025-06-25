import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { AuthContext } from '../context/AuthContext'

const Header = () => {

    const { isAuthenticated, userName, logout } = useContext(AuthContext)

    let usuario = "Login"
    let displayLogout = {display: "none"}
    let displayLogin = {display: ""}

    if (isAuthenticated) {
        usuario = localStorage.getItem('userName')
        displayLogout = {display: ""}
        displayLogin = {display: "none"}
    }

    return (
        <header>
            <div className="btn-group btnLoginUsuario" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-secondary" disabled>{usuario}</button>
                <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">                        
                        <Link to="/login" style={displayLogout} className="dropdown-item" onClick={() => logout()}>Logout</Link>
                        <Link to="/login" style={displayLogin} className="dropdown-item">Login</Link>
                    </div>
                </div>
            </div>
            <ProjectCard title="Materiales Elécticos"
                         description="Venta de materiales eléctricos" />
        </header>
    )
}

export default Header