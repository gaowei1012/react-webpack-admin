import get from 'lodash/get'

function createReducer(defaultState, handlers) {
  /// state 必须是一个函数
  if(typeof defaultState !== 'function') throw new Error('必须是一个函数')
  /// reducer function
  function reducer(state = defaultState(), action = {}) {
    /// 不是action并且action类型不是字符串
    if(!action || typeof action.type !== 'string') return state
    /// 通过lodash的get方法获取handler
    const handler = get(handlers, action.type)
    /// handler 必须是函数
    if(typeof handler === 'function') {
      return handler(state, action)
    }

    return state
  }
  /// 给reducer上面挂在方法
  reducer.defaultState = defaultState
  reducer.handlers = handlers

  return reducer
}

export default createReducer
