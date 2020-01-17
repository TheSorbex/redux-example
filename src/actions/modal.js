import { actions } from '../constants'

const openModal = () => ({
  type: actions.OPEN_MODAL
})

const closeModal = () => ({
  type: actions.CLOSE_MODAL
})

export default {
  openModal,
  closeModal
}
