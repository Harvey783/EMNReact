import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CommentItem = ({ comment: { text } }) => (
  <div>
    <h4>{text}</h4>
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
