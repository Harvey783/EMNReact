import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
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
      <section id="comment">
        <div className="comment-form">
          <form
            className="form-horizontal"
            onSubmit={e => {
              e.preventDefault();
              createPost(formData, history);
            }}
          >
            <div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Post Title"
                  name="title"
                  value={title}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <div id="category" className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Post Category"
                  name="category"
                  value={category}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Say Something"
                  name="text"
                  value={text}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-block">
              Post
            </button>
          </form>
        </div>
      </section>
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
