import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./Posts";
import PostForm from "./PostForm";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="content" style={{ margin: 20 }}>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
