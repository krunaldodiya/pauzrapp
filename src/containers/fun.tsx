import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Fun from '../screens/fun';
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

const FunContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fun);

export default FunContainer;
