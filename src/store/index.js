import AuthStore from './AuthStore'
import CurationStore from './CurationStore'

const authStore = new AuthStore()
const curationStore = new CurationStore()

export default {
  authStore,
  curationStore
}
