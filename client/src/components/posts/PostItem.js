import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/index';
import moment from 'moment';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  post: {
    _id,
    text,
    title,
    category,
    comments,
    author,
    date,
    user,
    likes,
    avatar
  },
  auth
}) => (
  <Fragment>
    <Fragment>
      <div className="post-item-wrapper">
        <img className="post-item-avatar" src={avatar} alt="avatar" />
        <div className="post-item-content-wrapper">
          <div className="post-item-title-wrapper">
            <h1 className="post-item-post-title">
              <Link to={`/posts/${_id}`}>{title}</Link>
            </h1>
          </div>
          <div className="post-item-post-text">
            {text.length > 310 ? `${text.substring(0, 310)}...` : text}
          </div>

          <div className="post-item-post-details-wrapper">
            <div className="post-item-post-details-comments-wrapper">
              <Link
                className="post-item-post-details-comment"
                to={`/posts/${_id}`}
              >
                {comments.length} comments
              </Link>

              <span>
                <Link
                  className="post-item-post-details-likes"
                  to={`/posts/${_id}`}
                >
                  {likes.length} likes
                </Link>
              </span>
              <span className="action ">
                {user === auth.user._id && (
                  <i
                    onClick={() => addLike(_id)}
                    className="far fa-thumbs-up fa-sm"
                    style={{ color: '#33a0ff' }}
                  />
                )}
              </span>
              <span className="action ">
                {user === auth.user._id && (
                  <i
                    onClick={() => removeLike(_id)}
                    className="far fa-thumbs-down fa-sm"
                    style={{ color: '#33a0ff' }}
                  />
                )}
              </span>
              <span className="action ">
                {user === auth.user._id && (
                  <i
                    onClick={() => deletePost(_id)}
                    className="far fa-trash-alt fa-sm"
                    style={{ color: '#33a0ff' }}
                  />
                )}
              </span>
            </div>
          </div>
          <div className="comment-post-item-date">
            Posted in <Link to={`/${category}`}>{category}</Link> by {author}{' '}
            {moment(date).fromNow()}
          </div>
        </div>
      </div>
    </Fragment>
  </Fragment>
);
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
