import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/index';

const PublicPosts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="posts-lists-container-wrapper">
      <main className="posts-lists-main-section">
        {posts.map(post => (
          <Fragment>
            <PostItem key={post._id} post={post} />
          </Fragment>
        ))}
      </main>
      <aside className="comment-lists-aside-section">
        <nav className="comment-lists-aside-categories-nav" />
      </aside>
    </div>
  );
};

PublicPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PublicPosts);
