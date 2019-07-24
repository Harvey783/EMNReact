import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentPostItem from '../posts/CommentPostItem';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/index';
import Spinner from '../layout/Spinner';
import CommentForm from '../post/CommentForm';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <div className="comment-lists-container-wrapper">
      <main className="comment-lists-main-section">
        <Fragment>
          <CommentPostItem post={post} showActions={true} />
        </Fragment>
        <div className="comment-lists-wrapper">
          {post.comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      </main>
      <aside className="comment-lists-aside-section">
        <nav className="comment-lists-aside-categories-nav" />
        <CommentForm postId={post._id} />
      </aside>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ post: state.post });

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
