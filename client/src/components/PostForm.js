import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
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

  handleClick = () => {
    this.props.history.push('/');
  };

  render() {
    console.log(this.props.history);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="text" component={this.renderInput} label="Enter Text" />
        <Field
          name="category"
          component={this.renderInput}
          label="Enter Category"
        />
        <button onClick={this.handleClick} type="submit" />
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   console.log(state.form.postForm);
//   return { formValues: state.form.postForm };
// }
// export default reduxForm({
//   form: 'postForm'
// })(PostForm);

// export default connect(mapStateToProps)(
//   reduxForm({
//     form: 'postForm'
//   })(withRouter(PostForm))
// );

export default reduxForm({
  form: 'postForm',
  createPost
})(withRouter(PostForm));
