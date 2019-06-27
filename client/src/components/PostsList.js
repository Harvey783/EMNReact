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
          <h4 className="title">
            <a className="title" href="/api/posts:id">
              {post.title}
            </a>
            <span className="action">{post.category}</span>
          </h4>

          <div className="text">{post.text}</div>
          <a className="comments" href="/api/posts/:id">
            {post.comments.length} comments
          </a>
          <span className="action comments">
            {post.likes.length} <i className="far fa-heart" />
          </span>

          <span className="action ">
            <i className="far fa-thumbs-up" />
          </span>
          <span className="action ">
            <i className="far fa-thumbs-down" />
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
