import React, {Component} from "react";
import api from "../api";
import {bindActionCreators} from "redux";
import {fetchBooks} from "../store/bookActions";
import {connect} from "react-redux";

class Dashboard extends Component {

    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('pass');
        const {history} = this.props;
        history.push('/login');
        window.location.reload();
    }

    // getBooks = () => {
    //     api.get(`/dashboard`)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <a className="navbar-brand " href="/dashboard">Biblioteka dashboard</a>
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

const mapStateToProps = (state) => ({
   books: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: bindActionCreators(fetchBooks, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
