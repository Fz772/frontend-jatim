import { useNavigate } from "react-router-dom";
import api from "../../api";




function Navbar() {
    
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    
    
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            
            await api.post('/auth/logout')
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            navigate('/')
        } catch (error) {
            console.log(error.response.data.message)
            const message = error.response.data.message
            if(message === 'Unauthenticated.') {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                alert('Token Invalid');
                setTimeout(() => {
                    navigate('/');
                }, 500);
            }
            else {
                console.error(error);
                alert(message || "Something went wrong");
            }
        }
    }
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div className="container">
        <a className="navbar-brand" href="#">Job Seekers Platform</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">{username}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </>
    )
}

export default Navbar;