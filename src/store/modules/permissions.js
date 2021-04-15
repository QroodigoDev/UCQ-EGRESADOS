const permissions = {
  state: {
    rules: []
  },
  mutations: {
    storeRules (state, rules) {
      state.rules = rules
    },
    clearPermissions (state) {
      state.rules = []
    }
  },
  actions: {
    updateAbility (context, rules) {
      const vue = this._vm
      vue.$ability.update(rules)
    }
  },
  getters: {
    getRules (state) {
      return state.rules
    }
  }
}

export default permissions
