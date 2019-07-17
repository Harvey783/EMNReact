import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

const CommentItem = ({ comment: { text, author, date } }) => (
  <li className="comment even thread-even depth-1" id="li-comment-1">
    <div id="comment-1" class="comment-wrap clearfix">
      <div class="comment-meta">
        <div class="comment-author vcard">
          <span class="comment-avatar clearfix">
            <img
              alt=""
              src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60"
              class="avatar avatar-60 photo avatar-default"
              height="60"
              width="60"
            />
          </span>
        </div>
      </div>
      <div class="comment-content clearfix">
        <div class="comment-author">
          {author}
          <span>
            <a href="#" title="Permalink to this comment">
              {moment.utc(date).format('M-D-YY')}
            </a>
          </span>
        </div>
        <p>{text}</p>
      </div>
      <div class="clear" />
    </div>
  </li>
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
