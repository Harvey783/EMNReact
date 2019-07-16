import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

const PostItem = ({
  post: { _id, text, title, category, comments, author, date, likes, avatar }
}) => (
  <Fragment>
    <div className="voting">
      <i className="fas fa-arrow-up fa-xs" />
      <div className="likes">{likes.length}</div>
      <i className="fas fa-arrow-down fa-xs" />
    </div>
    <img className="avatar" src={avatar} alt="avatar" />
    <div className="content">
      <h4 className="title">
        <Link className="title" to={`/posts/${_id}`}>
          {title}
        </Link>
        <span className="action category">{category}</span>
      </h4>
      <div className="text">{text}</div>
      <a className="comments" href="/posts/:id">
        {comments.length} comments
      </a>
      <span className="action submitted ">
        Posted by {author} on {moment.utc(date).format('M-D-YY')}{' '}
      </span>
    </div>
  </Fragment>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
