import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserPage from './UserPage'
import { modal } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  const { openModal } = modal
  return bindActionCreators({ openModal }, dispatch)
}

const UserPageContainer = connect(
  null,
  mapDispatchToProps
)(UserPage)

export default UserPageContainer
