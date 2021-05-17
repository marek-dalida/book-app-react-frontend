import React, {Component} from "react";


const logout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('pass');
    window.location.reload();
}

class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <a className="navbar-brand " href="/">Biblioteka dashboard</a>
                            <div className="nav ml-auto mr-3" id="navbarText">
                            <span className='navbar-text text-light'>
                                Jesteś zalogowany jako: <b> {localStorage.getItem('login')} </b></span>
                            </div>
                        <form className="form-inline my-2 my-lg-0" id="logoutForm" onSubmit={logout}>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Wyloguj</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Dashboard;
