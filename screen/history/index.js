import History from './history'
import {connect} from 'react-redux';

//fake data
import listActions from '../../Data/listAction';


const mapStateToProps = () => {
    return {
        listActions: listActions,
    }
}

export default connect(mapStateToProps,null)(History)
