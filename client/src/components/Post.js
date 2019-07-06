import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import moment from 'moment';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      post: {}
    };
  }

  async componentDidMount() {
    await this.props.getPost(this.props.match.params.id);
    await this.setState({ loaded: true });
  }

  renderPost() {
    return (
      <div className="content">
        <h4 className="title">
          {this.props.post.title}
          <span className="action">{this.props.post.category}</span>
        </h4>

        <div className="text">{this.props.post.text}</div>

        <a className="comments" href="/posts/:id">
          {this.props.post.comments.length} comments
        </a>

        <span className="action">
          {this.props.post.likes.length} <i className="far fa-heart" />
        </span>

        <span className="action ">
          <i className="far fa-thumbs-up" />
        </span>

        <span className="action ">
          <i className="far fa-thumbs-down" />
        </span>
        <span className="action submitted ">
          Posted by {this.props.post.author} on{' '}
          {moment.utc(this.props.post.created).format('DD-MM-YY')}{' '}
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="content-top">
        <div>{this.state.loaded && this.renderPost()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
