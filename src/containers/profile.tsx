import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Profile from '../screens/profile';
import {changeName} from '../store/actions';
import authData from '../store/selectors/auth';

const mapStateToProps = (state: any) => ({
  auth: authData(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      changeName: changeName,
    },
    dispatch
  );
};

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;
