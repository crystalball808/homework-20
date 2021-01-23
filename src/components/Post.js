import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateLike } from '../redux/actions';

import { Heart, HeartFill } from 'react-bootstrap-icons';

const Post = ({ post, updateLike }) => {
  const changeLike = () => {
    updateLike(post.id);
  };

  return (
    <Card bg='primary' text='white' key={post.id}>
      <Card.Body>
        <Card.Title>
          <Image
            src={post.avatar}
            rounded
            width='20%'
            style={{
              marginRight: '10px',
            }}
          />
          {post.name} {post.nickname} {post.date}
        </Card.Title>
        <Image src={post.imageLink} fluid rounded />
        <Card.Text>{post.postText}</Card.Text>
        <Button onClick={changeLike}>
          {post.liked ? <HeartFill /> : <Heart />} {post.likes}
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  updateLike,
};

export default connect(null, mapDispatchToProps)(Post);
