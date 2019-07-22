import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

const CommentItem = ({ comment: { text, author, date } }) => (
  <div className="comment-item-wrapper">
    <img
      className="comment-item-avatar"
      alt="#"
      src="https://randomuser.me/api/portraits/women/1.jpg"
      class="avatar avatar-60 photo avatar-default"
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
        </div>
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(CommentItem);
