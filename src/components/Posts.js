import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className='text-center'>There are no posts</p>;
  }
  return posts.map((post) => <Post post={post} />);
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
