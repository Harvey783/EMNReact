import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/index';
import Spinner from '../layout/Spinner';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="postcontent nobottommargin clearfix">
            <Fragment>
              <PostItem post={post} showActions={true} />

              <div id="comments" className="clearfix">
                <h4 id="comments-title">Comments</h4>

                <ol className="commentlist">
                  {post.comments.map(comment => (
                    <CommentItem
                      key={comment._id}
                      comment={comment}
                      postId={post._id}
                    />
                  ))}
                </ol>
              </div>

              <CommentForm postId={post._id} />
            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ post: state.post });

export default connect(
  mapStateToProps,
  { getPost }
)(Post);