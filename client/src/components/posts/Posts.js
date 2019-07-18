import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/index';
import CreatePost from './CreatePost';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(
    () => {
      console.log(posts);
      getPosts();
      console.log(posts);
    },
    [getPosts],
    console.log(posts)
  );

  return (
    <section id="content">
      <div className="content-wrap">
        <Fragment>
          <div className="col_two_third">
            {posts.map(post => (
              <Fragment>
                <PostItem key={post._id} post={post} />
              </Fragment>
            ))}
          </div>
        </Fragment>
        <div className="col_one_third col_last">
          <section className="contact">
            <div className="contact-form bg-light">
              <h6 className="m-heading light">.</h6>
              <CreatePost />
            </div>
          </section>
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
