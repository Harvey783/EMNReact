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
        {/* <div className="post"> */}

        <div className="post">
          <img className="avatar" src={avatar} alt="avatar" />
          <div className="content">
            <h4 className="title">
              <Link className="title" to={`/posts/${_id}`}>
                {title}
              </Link>
              <span className="action" />
              <span className="action category">{category}</span>
            </h4>
            <div className="text">{text}</div>
            <a className="action" href="/posts/:id">
              {comments.length} comments
            </a>
            <span className="action " />
            <span className="action">{likes.length} likes</span>
            <span className="action ">
              <i
                onClick={() => addLike(_id)}
                className="far fa-thumbs-up fa-sm"
              />
            </span>
            <span className="action ">
              <i
                onClick={() => removeLike(_id)}
                className="far fa-thumbs-down fa-sm"
              />
            </span>
            <span className="action " />
            <span className="action submitted ">
              Posted by {author} on {moment.utc(date).format('M-D-YY')}
            </span>
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
