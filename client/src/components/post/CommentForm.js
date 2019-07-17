import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/index';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <div>
        <h5 className="comment-title">
          Leave a <span className="span-comment-title">Comment</span>
        </h5>
      </div>

      <form
        className="comment-form"
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <div>
          <textarea
            name="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-dark my-1" />>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
