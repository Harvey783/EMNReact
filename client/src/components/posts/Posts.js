import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/index';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <Fragment>
            <div class="postcontent nobottommargin clearfix">
              {posts.map(post => (
                <Fragment>
                  <PostItem key={post._id} post={post} />
                </Fragment>
              ))}
            </div>
          </Fragment>
          <div class="sidebar nobottommargin col_last clearfix" />
        </div>
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
