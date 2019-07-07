import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { withRouter } from 'react-router-dom';

class PostCreate extends React.Component {
  onSubmit = (formValues, history) => {
    console.log(this.props.history);
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

function mapStateToProps(state) {
  return { formValues: state.form };
}

export default connect(
  mapStateToProps,
  { createPost }
)(withRouter(PostCreate));
