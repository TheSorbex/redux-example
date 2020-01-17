import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MainPage from './MainPage'
import { modal } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  const { openModal } = modal
  return bindActionCreators({ openModal }, dispatch)
}

const MainPageContainer = connect(
  null,
  mapDispatchToProps
)(MainPage)

export default MainPageContainer
