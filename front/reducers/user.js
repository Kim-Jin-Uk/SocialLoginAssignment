import produce from 'immer'

export const initialState = {
  getEmailLoading: false,
  getEmailDone: false,
  getEmailError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  userEmail: '',
}

export const GET_EMAIL_REQUEST = 'GET_EMAIL_REQUEST'
export const GET_EMAIL_SUCCESS = 'GET_EMAIL_SUCCESS'
export const GET_EMAIL_FAILURE = 'GET_EMAIL_FAILURE'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_EMAIL_REQUEST:
        draft.getEmailLoading = true
        draft.getEmailError = null
        draft.getEmailDone = false
        break
      case GET_EMAIL_SUCCESS:
        draft.getEmailLoading = false
        draft.getEmailDone = true
        draft.userEmail = action.data
        break
      case GET_EMAIL_FAILURE:
        draft.getEmailLoading = false
        draft.getEmailError = action.error
        break

      case LOGOUT_REQUEST:
        draft.logOutLoading = true
        draft.logOutError = null
        draft.logOutDone = false
        break
      case LOGOUT_SUCCESS:
        draft.logOutLoading = false
        draft.logOutDone = false
        draft.logOutError = null
        draft.getEmailLoading = false
        draft.getEmailDone = false
        draft.getEmailError = null
        draft.userEmail = ''
        break
      case LOGOUT_FAILURE:
        draft.logOutLoading = false
        draft.logOutError = action.error
        break

      default:
        break
    }
  })
