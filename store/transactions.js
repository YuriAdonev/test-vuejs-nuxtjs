const transactions = [];

export const actions = {
  async fetchTransactions({commit}) {
    try {
      return await this.$axios.$get('/api/transaction/admin/');
    } catch (e) {
      commit('serError', e, {root: true});
      throw e;
    }
  },
  async createTransaction({commit}, formData) {
    try {
      return await this.$axios.$post('/api/transaction', formData);
    } catch (e) {
      commit('serError', e, {root: true});
    }
  },
  async cancel({commit}, id) {
    try {
      const status = false;
      return await this.$axios.$put(`/api/transaction/admin/${id}`, {status});
    } catch (e) {
      commit('serError', e, {root: true});
    }
  }
}
