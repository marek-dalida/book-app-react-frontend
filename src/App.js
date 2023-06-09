import React, {Component} from "react";
import AppRouter from "./Router";
import {Provider} from "react-redux";
import {store} from "./store";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <AppRouter/>
        </Provider>
    )
  }
}

export default App;
