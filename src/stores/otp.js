import {flow, types} from 'mobx-state-tree'; // A
import {AsyncStorage} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {api} from '../libs/api';
import screens from '../libs/screens';
import Country from '../models/country';
import ValidationError from '../models/validation_error';
import makeRequest from '../services/make_request';
import AuthStore from './auth';
import UserStore from './user';

const OtpStore = types
  .model('OtpStore', {
    country: types.maybeNull(Country),
    mobile: types.maybeNull(types.string, ''),
    clientOtp: types.maybeNull(types.number, null),
    serverOtp: types.maybeNull(types.number, null),
    loading: types.optional(types.boolean, false),
    errors: types.maybeNull(ValidationError),
  })
  .views(() => ({
    //
  }))
  .actions(self => ({
    setSelectedCountry(country) {
      self.country = {
        id: country.id,
        name: country.name,
        phonecode: country.phonecode,
        shortname: country.shortname,
      };
    },

    changeMobile(value) {
      self.mobile = value.length > 0 ? value : '';
    },

    changeOtp(value) {
      self.clientOtp = value.length > 0 ? parseInt(value, 10) : null;
    },

    requestOtp: flow(function*(navigation, type) {
      self.loading = true;

      try {
        const {data} = yield makeRequest(api.requestOtp, {
          mobile: self.mobile,
          country: self.country,
        });

        self.serverOtp = data['otp'];
        self.loading = false;

        if (type === 'send') {
          navigation.replace(screens.VerifyOtp);
        }
      } catch (error) {
        self.loading = false;
      }
    }),

    verifyOtp: flow(function*(navigation) {
      self.loading = true;

      try {
        const {data} = yield makeRequest(api.verifyOtp, {
          mobile: self.mobile,
          otp: self.clientOtp,
          country: self.country,
          fcm_token: AuthStore.fcmToken,
          version: DeviceInfo.getVersion(),
        });

        AsyncStorage.setItem('authToken', data['access_token']);

        const {user} = data;

        UserStore.setAuthUser(user);
        AuthStore.setAuthUserId(user['id']);

        self.loading = false;

        navigation.replace(screens.Home);
      } catch (error) {
        self.loading = false;
      }
    }),
  }))
  .create();

export default OtpStore;
