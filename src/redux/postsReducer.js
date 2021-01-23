import { CREATE_POST, UPDATE_LIKE } from './types';

const initialState = {
  posts: [
    {
      id: 78594,
      avatar:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9fb6473-6c7b-4a39-8f94-78f29544ffd1/d8p5vgs-3a8cc8bd-77a3-424a-8112-092487f0a6d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTlmYjY0NzMtNmM3Yi00YTM5LThmOTQtNzhmMjk1NDRmZmQxXC9kOHA1dmdzLTNhOGNjOGJkLTc3YTMtNDI0YS04MTEyLTA5MjQ4N2YwYTZkNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mICPCGEkH7d7ymO1pRmordFualLS38mafdoAcOMUyN4',
      name: 'John Cena',
      nickname: '@john_cena',
      postText: "YOU CAN'T SEE ME!!!",
      imageLink: 'https://million-wallpapers.ru/wallpapers/2/87/492561881628671.jpg',
      date: '10/12/2020',
      likes: 500,
      liked: false,
    },
    {
        id: 3289451,
        avatar:
          'https://avatarfiles.alphacoders.com/104/thumb-104293.png',
        name: 'Batman',
        nickname: '@the_dark_knight',
        postText: "Period.",
        imageLink: 'https://cdn.geeksandgamers.com/wp-content/uploads/hm_bbpui/194017/88kfne6wza8knkcrqchroypolrdnp7tt.jpg',
        date: '05/01/2021',
        likes: 4708,
        liked: false,
      },
  ],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_LIKE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (action.id === post.id) {
            const newP = Object.assign({}, post);
            if (newP.liked) {
              newP.liked = false;
              newP.likes--;
            } else {
              newP.liked = true;
              newP.likes++;
            }
            return newP;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
