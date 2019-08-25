import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Focus from '../screens/focus';
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

const FocusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Focus);

export default FocusContainer;
