import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ post }) => {
  if ((post.avatar = null || undefined)) {
    return <span className="avatar default" />;
  } else {
    return <img className="avatar" alt="avatar" src={post.avatar} />;
  }
};
Avatar.propTypes = {
  post: PropTypes.object.isRequired
};

export default Avatar;
