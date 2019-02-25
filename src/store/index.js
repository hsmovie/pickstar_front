import AuthStore from './AuthStore'
import CurationStore from './CurationStore'
import StarDetailStore from './StarDetailStore'

const authStore = new AuthStore()
const curationStore = new CurationStore()
const starDetailStore = new StarDetailStore()

export default {
  authStore,
  curationStore,
  starDetailStore,
}
