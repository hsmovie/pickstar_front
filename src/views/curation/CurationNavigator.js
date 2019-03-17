import { createStackNavigator } from 'react-navigation'

import CurationSearchScreen from '../curation/search/CurationSearchScreen'
import CurationCreateInfoScreen from '../curation/create/CurationCreateInfoScreen'
import CurationDatePickScreen from '../curation/create/CurationDatePickScreen'
import CurationColorPickScreen from '../curation/create/CurationColorPickScreen'
import CurationUploadImageScreen from '../curation/create/CurationUploadImageScreen'

const CurationNavigator = createStackNavigator({
  curationSearch: CurationSearchScreen,
  curationColorPick: CurationColorPickScreen,
  curationCreateInfo: CurationCreateInfoScreen,
  curationUploadImage: CurationUploadImageScreen,
  curationDatePick: CurationDatePickScreen,
})

export default CurationNavigator
