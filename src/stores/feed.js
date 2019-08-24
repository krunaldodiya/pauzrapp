import {flow, types} from 'mobx-state-tree'; // A
import {api} from '../libs/api';
import ValidationError from '../models/validation_error';
import makeRequest from '../services/make_request';
import PostStore from './post';

const FeedStore = types
  .model('FeedStore', {
    current_page: types.optional(types.integer, 0),
    last_page: types.maybeNull(types.integer),
    total: types.maybeNull(types.integer),
    feedable_ids: types.optional(types.array(types.integer), []),
    viewableItem: null,
    muted: false,
    loading: false,
    errors: types.maybeNull(ValidationError),
  })
  .views(self => ({
    get allFeeds() {
      return PostStore.allPosts.filter(post => {
        return self.feedable_ids.indexOf(post.id) >= 0;
      });
    },
  }))
  .actions(self => ({
    updateViewableItems(viewableItem) {
      self.viewableItem = viewableItem;
      self.muted = false;
    },

    updateMutedIndex() {
      self.muted = !self.muted;
    },

    getFeeds: flow(function*() {
      if (self.current_page === self.last_page) return;

      self.loading = true;
      const nextPage = self.current_page + 1;

      try {
        const {data} = yield makeRequest(api.getFeeds, {page: nextPage});
        const {feeds, meta} = data;
        const ids = feeds.map(feed => feed.id);

        self.current_page = nextPage;
        self.last_page = meta['last_page'];
        self.total = meta['total'];

        self.feedable_ids.push(...ids);

        PostStore.addPosts(feeds);

        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),
  }))
  .create();

export default FeedStore;
