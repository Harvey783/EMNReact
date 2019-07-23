import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/index';
import moment from 'moment';

const PostItem = ({
  addLike,
  removeLike,
  post: { _id, text, title, category, comments, author, date, likes, avatar },
  showActions
}) => (
  <Fragment>
    {showActions && (
      <Fragment>
        <div className="post-item-wrapper">
          <img className="post-item-avatar" src={avatar} alt="avatar" />
          <div className="post-item-content-wrapper">
            <div className="post-item-title-wrapper">
              <h1 className="post-item-post-title">
                <Link to={`/posts/${_id}`}>{title}</Link>
              </h1>
            </div>
            <div className="post-item-post-text">{text}</div>

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
              </div>
            </div>
            <div className="comment-post-item-date">
              Posted in {category} by {author} on
              {moment.utc(date).format('M-D-YY h:mm a')}
            </div>
          </div>
        </div>
      </Fragment>
    )}
  </Fragment>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(PostItem);
