import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

const FormPost = ({ createPost }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: Math.floor(Math.random() * 10000000),
      avatar: e.target[0].value,
      name: e.target[1].value,
      nickname: '@' + e.target[2].value,
      postText: e.target[3].value,
      imageLink: e.target[4].value,
      date: new Date().toLocaleDateString('en-GB'),
      likes: Math.floor(Math.random() * 100),
      liked: false,
    };

    createPost(newPost);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <select className='form-select' aria-label='Default select example'>
          <option selected>Select avatar</option>
          <option value='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-super-mario-brothers-luigi.jpg'>
            Luigi
          </option>
          <option value='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-super-mario-brothers-mario.jpg'>
            Mario
          </option>
          <option value='https://i1.sndcdn.com/avatars-000656519996-r5d9zq-t500x500.jpg'>
            Goku
          </option>
        </select>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' className='form-control' />
        <label htmlFor='nickname'>Nickname</label>
        <input type='text' id='nickname' className='form-control' />
        <label htmlFor='post-text'>Post text</label>
        <input type='text' id='post-text' className='form-control' />
        <label htmlFor='img-link'>Image URL</label>
        <input type='text' id='img-link' className='form-control' />
      </div>
      <button className='btm btn-success' type='submit'>
        Create
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(FormPost);
