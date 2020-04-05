import { login, logout, getInfo, addTeacher } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import Cookies from 'js-cookie'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    id: '',
    avatar: 'https://ae01.alicdn.com/kf/Hf0ce51edbbb04a8185c7df0b0f2f804cU.jpg', // TO DO 用户头像，当学生上传头像时初始化
    roles: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ID: (state, id) => {
    state.id = id
  },  
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  // SET_STATE: (state, role) => {} //todo 设置用户的状态 ，1在用，0停用
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username, password: password }).then(response => {
        const { data } = response
        // 登录成功后将token存储在cookie之中
        Cookies.set('Token', data.token)
        commit('SET_TOKEN', data.token)
        commit('SET_NAME', data.user_name)
        commit('SET_ID', data.id)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {        
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {user_name ,user_role } = data
        // console.log(user_rule)
        
        commit('SET_NAME', user_name)
        // commit('SET_AVATAR', response.data.user_role)
        commit('SET_ROLES', user_role)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  addTeacher({ commit }, formData) {
    // const { teacher_name, teacher_id, management_faculty, teacher_permission } = formData
    console.log("commit创建老师：", formData)
    return new Promise((resolve, reject) => {
      addTeacher({ formData }).then(response => {
        const { data } = response
        console.log(data)
        resolve()
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

