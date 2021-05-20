import React, {Component} from "react";
import {withRouter} from "react-router";


class Navbar extends Component {

    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('pass');
        const {history} = this.props;
        history.push('/login');
        window.location.reload();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <a className="navbar-brand " href="/dashboard">Biblioteka dashboard</a>
                    <div className="navbar-nav ms-auto me-3">
                            <span className='navbar-text text-light'>
                                Jesteś zalogowany jako: <b> {localStorage.getItem('login')} </b></span>
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.logout}
                            type="submit">Wyloguj
                    </button>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);
