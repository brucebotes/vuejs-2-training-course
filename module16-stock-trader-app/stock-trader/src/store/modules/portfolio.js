const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((stock) => stock.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({ id: stockid, quantity: quantity })
    }

    state.funds -= quantity * stockPrice
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((stock) => stock.id === stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.findOf(record), 1)
    }

    state.funds += quantity * stockPrice
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}
const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find((element) => element.id == stock.id)
    })
  },
  funds: (state) => {
    return state.funds
  }
}

export default {
  mutations,
  actions,
  gettersers
}
