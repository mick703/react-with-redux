import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "./actions/postAction";

class PostForm extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>New Post</h3>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  post: state.posts.item
});

export default connect(
  mapStateToProps,
  { createPost }
)(PostForm);
