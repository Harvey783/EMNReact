import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions';

class PostForm extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="text" component={this.renderInput} label="Enter Text" />
        <Field
          name="category"
          component={this.renderInput}
          label="Enter Category"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null)(
  reduxForm({
    form: 'postForm',
    createPost
  })(withRouter(PostForm))
);
