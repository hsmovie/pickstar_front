import { createStackNavigator } from 'react-navigation'

import CurationSearchScreen from '../curation/search/CurationSearchScreen'
import CurationCreateInfoScreen from '../curation/create/CurationCreateInfoScreen'
import CurationDatePickScreen from '../curation/create/CurationDatePickScreen'
import CurationColorPickScreen from '../curation/create/CurationColorPickScreen'

const CurationNavigator = createStackNavigator({
  curationColorPick: CurationColorPickScreen,
  curationDatePick: CurationDatePickScreen,
  curationCreateInfo: CurationCreateInfoScreen,
  curationSearch: CurationSearchScreen,
})

export default CurationNavigator
