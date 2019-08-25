import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Intro from '../screens/intro';
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

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);

export default IntroContainer;
