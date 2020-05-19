import { LocationModel } from '../models'

const initialState = () => ({
  city: '',
  countryCode: ''
})

const state: LocationModel = initialState()

// export default {
//   UPDATE_LOCATION: (
//     state: { appLoading: LoadingModel; location: LocationModel },
//     payload: LocationModel
//   ) => {
//     state.location = payload
//   },
// }

export default {
  namespaced: true,
  state
}
