import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {addBook, fetchBooks, deleteBook} from "../store/bookActions";
import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";
import Navbar from "../components/Navbar";

const isAdmin = Boolean(localStorage.getItem('login') === 'admin');

class Dashboard extends Component {

    logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('pass');
        const {history} = this.props;
        history.push('/login');
        window.location.reload();
    }

    addBook = (values, {setSubmitting, resetForm}) => {
        this.props.addBook(values);
        setSubmitting(false);
        resetForm({});
    }

    deleteBookRequest = (id) => {
        console.log(id)
        this.props.deleteBook(id);
    }

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
            <div>
                <Navbar />

                {isAdmin && <Formik
                    initialValues={{
                        title: '',
                        author: '',
                        year: ''
                    }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        this.addBook(values, {setSubmitting, resetForm});
                    }}
                >
                    {({isSubmitting}) => (
                        <div className="col-4 offset-4">
                            <Form>
                                <h4 className="text-center h4 mt-4">Dodawanie książki</h4>

                                <div className="form-group">
                                    <label htmlFor="title">Tytuł</label>
                                    <Field name="title" className="form-control" type="text"
                                           placeholder="Podaj tytuł książki"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="author">Autor</label>
                                    <Field name="author" className="form-control"  placeholder="Podaj autora książki"
                                           type="text"/>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="year">Rok wydania</label>
                                    <Field name="year" className="form-control" placeholder="Podaj rok wydania"
                                           type="number"/>
                                </div>
                                <button type="submit" className="btn btn-secondary mt-2 mb-4"
                                        disabled={isSubmitting}>{isSubmitting ? "Czekaj ..." : "Dodaj książkę"}</button>
                            </Form>
                        </div>

                    )}
                </Formik>}

                <div className="col-8 offset-2">
                    <table className="table table-striped mt-5">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tytuł</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Rok wydania</th>
                            {isAdmin && <th scope="col">Usuń</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.books && this.props.books.booksData.map(book =>
                            <tr key={book.id}>
                                <td> {book.id} </td>
                                <td> {book.title}</td>
                                <td> {book.author}</td>
                                <td> {book.year}</td>
                                {isAdmin && <td>
                                    <button  className="btn btn-warning" onClick={this.deleteBookRequest.bind(null, book.id)}>Usuń książkę</button>
                                </td>}
                            </tr>
                        )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    books: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: bindActionCreators(fetchBooks, dispatch),
        addBook: bindActionCreators(addBook, dispatch),
        deleteBook: bindActionCreators(deleteBook, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
