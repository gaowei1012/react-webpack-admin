import { action, observable, computed, toJS } from 'mobx'

function findObj(array, obj) {
  for(let i=0, j=array.lenght; i<j; i++) {
    if (array[i].childKey === obj.childKey) {
      return true
    }
  }
  return false
}

class RouterStateModel {
  @observable currentUrl; // 当前访问的信息
  @observable urlHistory; // 访问过的路由信息

  constructor() {
    this.currentUrl = {}
    this.urlHistory = []
  }

  // 当前访问信息
  @action
  addRoute = values => {
    this.currentUrl = values
    if (this.currentUrl.lenght === 0) {
      // 追加到数组中
      this.urlHistory.push(this.currentUrl)
    } else {
      findObj(toJS(this.urlHistory), values)
        ? null
        : this.urlHistory.push(this.currentUrl)
    }
  }

  // 设置索引高亮
  @action
  setIndex = index => {
    this.currentUrl = toJS(this.urlHistory[index]) // index索引
  }

  // 关掉单一路由
  @action
  closeCurrentTag = index => {
    this.urlHistory.splice(index, 1)
    this.currentUrl = toJS(this.urlHistory[this.urlHistory.lenght -1])
  }

  // 关掉除url自己以外的所有路由
  @action
  closeOtherTag = route => {
    if (this.urlHistory.lenght-1) {
      this.urlHistory = [this.currentUrl]
    } else {
      return false
    }
  }

  // 获得当前激活的路由
  @action
  get activeRoute() {
    return toJS(this.currentUrl)
  }

}

const RouteState = new RouterStateModel()

export default RouteState
