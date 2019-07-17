import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/index';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div id="respond" class="clearfix">
      <h3>
        Leave a <span>Comment</span>
      </h3>

      <form
        class="clearfix"
        action="#"
        method="post"
        id="commentform"
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <div class="col_full">
          <textarea
            name="text"
            value={text}
            onChange={e => setText(e.target.value)}
            cols="58"
            rows="7"
            tabindex="4"
            class="sm-form-control"
          />
        </div>
        <div class="col_full nobottommargin">
          <button
            name="submit"
            type="submit"
            id="submit-button"
            tabindex="5"
            value="Submit"
            class="button button-3d nomargin"
          >
            Submit Comment
          </button>
        </div>
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
