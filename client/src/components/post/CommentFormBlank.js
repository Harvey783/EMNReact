import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/index';

const CommentFormBlank = ({}) => {
  return (
    <section id="comment">
      <div className="comment-form" />
    </section>
  );
};

CommentFormBlank.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentFormBlank);
