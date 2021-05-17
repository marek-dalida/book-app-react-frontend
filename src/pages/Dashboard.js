import React, {Component} from "react";


class Dashboard extends Component {

    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('pass');
        const {history} = this.props;
        history.push('/login');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <a className="navbar-brand " href="/">Biblioteka dashboard</a>
                        <div className="navbar-nav ms-auto me-3">
                            <span className='navbar-text text-light'>
                                Jesteś zalogowany jako: <b> {localStorage.getItem('login')} </b></span>
                        </div>
                        <div className="nav-item" id="logoutForm">
                            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.logout}
                                    type="submit">Wyloguj
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Dashboard;
