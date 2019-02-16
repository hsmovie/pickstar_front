import { createStackNavigator } from 'react-navigation'

import CurationSearchScreen from '../curation/search/CurationSearchScreen'
import CurationCraeteScreen from '../curation/create/CurationCreateScreen'

const CurationNavigator = createStackNavigator({
  curationSearch: CurationSearchScreen,
  curationCreate: CurationCraeteScreen,
})

export default CurationNavigator
