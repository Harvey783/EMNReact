import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { deleteComment } from '../../actions/index';

const CommentItem = ({
  deleteComment,
  comment: { text, author, date, _id }
}) => (
  <div className="comment-item-wrapper">
    <img
      className="comment-item-avatar"
      alt="avatar"
      src="https://randomuser.me/api/portraits/women/1.jpg"
      height="60"
      width="60"
    />

    <div className="comment-item-content-wrapper">
      <div className="comment-item-title-wrapper">
        <h1 className="comment-item-comment-title" />
      </div>
      <div className="comment-item-comment-text">{text}</div>
      <div className="comment-item-comment-details-wrapper">
        <div className="comment-item-comment-details-comments-wrapper">
          <a className="comment-item-comment-details-comment" href="/">
            {author}
          </a>
          <span>
            <a className="comment-item-comment-details-likes" href="" />
            {moment.utc(date).format('M-D-YY h:mm a')}
          </span>
          <span className="action ">
            <i
              onClick={() => deleteComment(_id)}
              className="far fa-trash-alt fa-sm"
              style={{ color: '#33a0ff' }}
            />
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
