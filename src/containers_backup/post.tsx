import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Post from '../screens/post';
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

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostContainer;
