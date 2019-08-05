import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentPostItem from '../posts/CommentPostItem';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/index';
import Spinner from '../layout/Spinner';
import CommentForm from '../post/CommentForm';
import CommentFormBlank from '../post/CommentFormBlank';

const Post = ({ getPost, post: { post }, auth, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return post === null ? (
    <Spinner />
  ) : (
    <div className="comment-lists-container-wrapper">
      <main className="comment-lists-main-section">
        <Fragment>
          <CommentPostItem post={post} />
        </Fragment>
        <div className="comment-lists-wrapper">
          {post.comments
            .concat()
            .map(comment => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))
            .sort((a, b) => (b.date > a.date ? 1 : -1))}
        </div>
      </main>
      <aside className="comment-lists-aside-section">
        <nav className="comment-lists-aside-categories-nav" />
        {auth.isAuthenticated ? (
          <CommentForm postId={post._id} />
        ) : (
          <CommentFormBlank />
        )}
      </aside>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
