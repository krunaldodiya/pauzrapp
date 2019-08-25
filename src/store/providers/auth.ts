import User from '../../models/user';

interface AuthProvider {
  authUserId: null | number;
  authUser: null | User;
  errors: null | {};
  loading: boolean;
  loaded: boolean;
}

export default AuthProvider;
