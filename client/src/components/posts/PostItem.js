import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/index';
import moment from 'moment';

const PostItem = ({
  addLike,
  removeLike,
  post: { _id, text, title, category, comments, author, date, likes, avatar }
}) => (
  <Fragment>
    <div className="voting">
      <i onClick={() => addLike(_id)} className="fas fa-arrow-up fa-xs" />
      <div className="likes">{likes.length}</div>
      <i onClick={() => removeLike(_id)} className="fas fa-arrow-down fa-xs" />
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(PostItem);
