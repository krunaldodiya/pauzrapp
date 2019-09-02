import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
interface NotificationState {
  notifications: [];
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: NotificationState = {
  notifications: [],
  errors: null,
  loading: false,
  loaded: false,
};

export const notification = createModel({
  name: 'notification',
  state: initialState,
  reducers: {
    setState(state: NotificationState, payload: any) {
      return {...state, ...payload};
    },
  },
  effects: (dispatch: any) => {
    return {
      async getNotifications(payload: any, rootState: any) {
        dispatch.notification.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getNotifications, payload, 'POST');
          const {notifications} = data;

          dispatch.notification.setState({loading: false, loaded: true, notifications});
        } catch (error) {
          dispatch.notification.setState({
            loading: false,
            loaded: true,
            errors: error.response.data,
          });
        }
      },
    };
  },
});
