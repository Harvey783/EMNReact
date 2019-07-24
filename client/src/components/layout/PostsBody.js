import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Posts from '../posts/Posts';
import PublicPosts from '../posts/PublicPosts';

const PostsBody = ({ auth }) => {
  const authPosts = <Posts />;
  const publicPosts = <PublicPosts />;

  return <Fragment>{auth.isAuthenticated ? authPosts : publicPosts}</Fragment>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PostsBody);
