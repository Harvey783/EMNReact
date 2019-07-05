import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions';
import moment from 'moment';

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div className="post" key={post._id}>
          <div className="voting">
            <i className="fas fa-arrow-up fa-xs" />
            <div className="likes">{post.likes.length}</div>
            <i className="fas fa-arrow-down fa-xs" />
          </div>
          <div className="content">
            <h4 className="title">
              <Link className="title" to={`/posts/${post._id}`}>
                {post.title}
              </Link>
              <span className="action category">{post.category}</span>
            </h4>
            <div className="text">{post.text}</div>
            <a className="comments" href="/posts/:id">
              {post.comments.length} comments
            </a>

            <span className="action submitted ">
              Posted by {post.author} on{' '}
              {moment.utc(post.created).format('DD-MM-YY')}{' '}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="posts">
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
