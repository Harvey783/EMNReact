import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/index';
import CreatePost from './CreatePost';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(
    () => {
      console.log(posts);
      getPosts();
      console.log(posts);
    },
    [getPosts],
    console.log(posts)
  );

  return (
    <div className="posts-lists-container-wrapper">
      <main className="posts-lists-main-section">
        {posts.map(post => (
          <Fragment>
            <PostItem key={post._id} post={post} />
          </Fragment>
        ))}
      </main>
      <aside className="posts-lists-aside-section">
        <nav className="posts-lists-aside-categories-nav">
          <span className="posts-lists-aside-categories-nav-span">
            categories
          </span>
          <a href="" className="posts-lists-aside-categories-links">
            General
          </a>
          <a href="" className="posts-lists-aside-categories-links">
            News
          </a>
          <a href="" className="posts-lists-aside-categories-links">
            Technology
          </a>
          <a href="" className="posts-lists-aside-categories-links">
            Politics
          </a>
        </nav>
      </aside>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
