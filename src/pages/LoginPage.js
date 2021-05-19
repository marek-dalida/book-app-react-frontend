import React, {Component} from "react";
import {Field, Form, Formik} from "formik";

const loginPageStyle = {
    margin: "auto",
    maxWidth: "530px",
    minWidth: "500px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
}

const wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
}

class LoginPage extends Component {

    loginToSystem = (values, {setSubmitting}) => {
        localStorage.setItem('login', values.username);
        localStorage.setItem('pass', values.password);
        const {history} = this.props;
        history.push('/dashboard');
        window.location.reload();
        setSubmitting(false);
    }

    render() {
        return (
            <div style={wrapper}>
                <div style={loginPageStyle}>
                    <h1 className="text-center mb-2">
                        Biblioteka
                    </h1>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            this.loginToSystem(values, {setSubmitting});
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="username">Login</label>
                                    <Field name="username" className="form-control" type="text"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Hasło</label>
                                    <Field name="password" className="form-control" type="password"/>
                                </div>

                                <div className="form-group ">
                                    <div className="d-flex justify-content-between mb-3 mt-4">
                                        <button type="submit" className="btn btn-dark"
                                                disabled={isSubmitting}>{isSubmitting ? "Czekaj ..." : "Zaloguj"}</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

export default LoginPage;

