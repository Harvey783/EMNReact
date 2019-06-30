import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Link className="title" to={`/posts/${post._id}`}>
              {post.title}
            </Link>
            <span className="action">{post._id}</span>
          </h4>

          <div className="text">{post.text}</div>
          <a className="comments" href="/posts/:id">
            {post.comments.length} comments
          </a>
          <span className="action">
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

export default connect(
  mapStateToProps,
  { getPosts }
)(PostsList);
