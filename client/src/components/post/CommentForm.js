import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/index';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <section id="comment">
      <div className="comment-form">
        <form
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
            <label for="text">Comment</label>
            <textarea
              className="form-control"
              name="text"
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark btn-block">
            Comment
          </button>
        </form>
      </div>
    </section>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
