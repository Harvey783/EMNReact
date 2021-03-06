import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { deleteComment } from '../../actions/index';

const CommentItem = ({
  postId,
  deleteComment,
  auth,
  comment: { text, author, avatar, user, date, _id }
}) => (
  <div className="comment-item-wrapper">
    <img
      className="comment-item-avatar"
      src={avatar}
      alt="avatar"
      height="60"
      width="60"
    />

    <div className="comment-item-content-wrapper">
      <div className="comment-item-comment-text">{text}</div>
      <div className="comment-item-comment-details-wrapper">
        <div className="comment-post-item-date">
          Commented by {author} {moment(date).fromNow()}
          <span className="action ">
            {user === auth.user._id && (
              <i
                onClick={() => deleteComment(postId, _id)}
                className="far fa-trash-alt fa-xs"
                style={{ color: '#33a0ff' }}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
