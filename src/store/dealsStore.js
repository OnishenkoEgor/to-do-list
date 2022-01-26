export const dealsStore = {
    state: {
        deals: [{
            title: "123",
            shortDesc: "123",
            deadline: "2022-01-20",
            important: "Immediately",
            fullDesc: "123",
            id: 1
        },
        {
            title: "123",
            shortDesc: "123",
            deadline: "2022-01-20",
            important: "Immediately",
            fullDesc: "123",
            id: 2
        }],
        id: 3
    },
    mutations: {
        addDeal(state, deal) {
            state.id++;
            state.deals.push({ ...deal, id: state.id })
        },
        removeDeal(state, id) {
            state.deals = state.deals.filter(deal => deal.id !== id)
        }
    },
    getters: {
        getDeals(state) {
            return state.deals
        },
        getDealById: state => id => {
            return state.deals.filter(deal => deal.id == id)[0]
        },
        getDealByDate(state, dealDate) {
            return state.deals // not ready
        }
    },
    actions: {
        
    },
    namespaced: true
}