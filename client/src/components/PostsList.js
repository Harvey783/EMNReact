import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div className="content" key={post._id}>
          <h4 className="title">{post.title}</h4>

          <div className="text">{post.text}</div>
          <span className="action">
            <i className="white thumbs up outline icon" />
          </span>
          <span className="action">
            <i className="white thumbs down outline icon" />
          </span>
          <span className="action">
            <i className="grey edit outline icon" />
          </span>
          <span className="action">
            <i className="grey trash alternate outline icon" />
          </span>
          <span className="action">
            <i className="grey comment outline icon" />
          </span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content-top">
        <div>{this.renderPosts()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts)
  };
};

// const mapStateToProps = state => ({
//   post: state.post
// });

export default connect(
  mapStateToProps,
  { getPosts }
)(PostsList);
