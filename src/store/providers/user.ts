import User from '../../models/user';

interface UserProvider {
  users: User[];
  errors: null | {};
  loading: boolean;
  loaded: boolean;
}

export default UserProvider;
