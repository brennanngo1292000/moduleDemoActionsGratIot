import ListAction from './ListAction';
import {connect} from 'react-redux';
import listActions from '../../Data/listAction';

const mapStateToProps = () => ({
  listActions: listActions
});

export default connect(mapStateToProps)(ListAction)