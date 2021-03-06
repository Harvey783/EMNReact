import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/index';
import moment from 'moment';

const CommentPostItem = ({
  addLike,
  removeLike,
  post: { _id, text, title, category, comments, author, date, likes, avatar }
}) => (
  <Fragment>
    <Fragment>
      <div className="post-item-wrapper">
        <img className="comment-item-avatar" src={avatar} alt="avatar" />
        <div className="post-item-content-wrapper">
          <div className="comment-item-title-wrapper">
            <h1 className="post-item-post-title">
              <Link to={`/posts/${_id}`}>{title}</Link>
            </h1>
          </div>
          <div className="comment-overflow-post-item-post-text">{text}</div>
          <div className="comment-item-post-details-wrapper">
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
                <i
                  onClick={() => addLike(_id)}
                  className="far fa-thumbs-up fa-sm"
                  style={{ color: '#33a0ff' }}
                />
              </span>
              <span className="action ">
                <i
                  onClick={() => removeLike(_id)}
                  className="far fa-thumbs-down fa-sm"
                  style={{ color: '#33a0ff' }}
                />
              </span>
            </div>
          </div>
          <div className="comment-post-item-date">
            Posted in {category} by {author} {moment(date).fromNow()}
          </div>
        </div>
      </div>
    </Fragment>
  </Fragment>
);

CommentPostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(CommentPostItem);
