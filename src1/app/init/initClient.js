import Cookie from 'js-cookie'
import isNil from 'lodash/isNil'
// import appAction from './action'

const initClient = (dispatch) => {
  const isLogin = isNil(Cookie.get('user-info'))

  const commonAction = []


}

export default initClient