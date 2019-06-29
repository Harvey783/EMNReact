import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions';

class Post extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params._id);
  }

  render() {
    return <div>Post</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params._id] };
};

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
