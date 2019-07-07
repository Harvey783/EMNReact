import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { withRouter } from 'react-router-dom';

const newPostForm = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: ''
  });

  const { title, text, category } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className="post-form">
      <form className="form my-1" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Text"
            name="text"
            value={text}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { createPost }
)(withRouter(newPostForm));
