import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';

const CreatePost = ({ createPost, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: ''
  });

  const { title, text, category } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <form
        className="post-form"
        onSubmit={e => {
          e.preventDefault();
          createPost(formData, history);
        }}
      >
        <div className="post-form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="post-form-group">
          <input
            type="text"
            placeholder="Text"
            name="text"
            value={text}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="post-form-group">
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-dark my-1" />
        <Link className="btn btn-light my-1" to="/">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(withRouter(CreatePost));
