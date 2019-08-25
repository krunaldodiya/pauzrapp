import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Post from '../screens/post';

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostContainer;
