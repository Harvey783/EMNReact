import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/index';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <form
      className="form-horizontal"
      action="#"
      method="post"
      id="commentform"
      onSubmit={e => {
        e.preventDefault();
        addComment(postId, { text });
        setText('');
      }}
    >
      <div className="form-group">
        <textarea
          className="form-control"
          name="text"
          type="text"
          value={text}
          placeholder="Say Something"
          onChange={e => setText(e.target.value)}
          required
        />
      </div>
      <input type="submit" className="btn btn-dark btn-block" />
    </form>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
