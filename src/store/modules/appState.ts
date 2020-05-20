import { LoadingModel } from '../models'

const initialState = () => ({
  appLoading: false
})

const state: LoadingModel = initialState()

// actions
const actions = {
  appIsLoading({ commit }: any) {
    commit('APP_LOADING')
  },

  appIsDoneLoading({ commit }: any) {
    commit('APP_DONE_LOADING')
  }
}

// mutations
const mutations = {
  APP_LOADING(state: LoadingModel) {
    state.appLoading = true
  },

  APP_DONE_LOADING(state: LoadingModel) {
    state.appLoading = false
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
