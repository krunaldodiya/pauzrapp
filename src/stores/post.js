import { flow, types } from 'mobx-state-tree'; // A
import { api } from '../libs/api';
import Post from '../models/post';
import makeRequest from '../services/make_request';

const PostStore = types
  .model('PostStore', {
    posts: types.array(Post),
  })
  .views(self => ({
    get allPosts() {
      return self.posts.slice();
    },
    postsByAuthor(author) {
      return self.posts.filter(post => post.author === author);
    },
  }))
  .actions(self => ({
    getPosts: flow(function*(page) {
      self.loading = true;

      try {
        const { data } = yield makeRequest(api.getPosts, { page });
        const { posts } = data;

        console.log(posts);

        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),

    addPosts(posts) {
      return self.posts.push(...posts);
    },
  }))
  .create();

export default PostStore;
