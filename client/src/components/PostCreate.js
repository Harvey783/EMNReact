import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { createPost } from '../actions';
// import { withRouter } from 'react-router-dom';

class PostCreate extends React.Component {
  onSubmit = (formValues, history) => {
    this.props.createPost(formValues, this.props.history);
  };

  render() {
    return (
      <div>
        <h4>Create a Post</h4>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostCreate);
