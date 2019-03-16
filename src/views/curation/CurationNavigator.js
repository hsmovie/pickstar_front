import { createStackNavigator } from 'react-navigation'

import CurationSearchScreen from '../curation/search/CurationSearchScreen'
import CurationCreateInfoScreen from '../curation/create/CurationCreateInfoScreen'
import CurationDatePickScreen from '../curation/create/CurationDatePickScreen'
import CurationColorPickScreen from '../curation/create/CurationColorPickScreen'
import CurationUploadImageScreen from '../curation/create/CurationUploadImageScreen'

const CurationNavigator = createStackNavigator({
  curationColorPick: CurationColorPickScreen,
  curationSearch: CurationSearchScreen,
  curationCreateInfo: CurationCreateInfoScreen,
  curationUploadImage: CurationUploadImageScreen,
  curationDatePick: CurationDatePickScreen,
})

export default CurationNavigator
