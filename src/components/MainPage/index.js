import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MainPage from './MainPage'
import { modal } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  const { openModal } = modal
  return bindActionCreators({ openModal }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    people: state.people.people.res
  }
}

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)

export default MainPageContainer
