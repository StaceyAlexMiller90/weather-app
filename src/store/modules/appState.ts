import { appModel } from '../models'

const initialState = () => ({
  appLoading: false,
  appStatus: 'ok'
})

const state: appModel = initialState()

// actions
const actions = {
  appIsLoading({ commit }: any) {
    commit('APP_LOADING')
  },

  appIsDoneLoading({ commit }: any) {
    commit('APP_DONE_LOADING')
  },

  appError({ commit }: any) {
    commit('APP_ERROR')
  }
}

// mutations
const mutations = {
  APP_LOADING(state: appModel) {
    state.appStatus = 'ok'
    state.appLoading = true
  },

  APP_DONE_LOADING(state: appModel) {
    state.appLoading = false
  },
  APP_ERROR(state: appModel) {
    state.appStatus = 'error'
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
