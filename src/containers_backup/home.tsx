import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from '../screens/home';
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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
