export const state = () => ({
  readSuccessful: false,
  transactions: []
})

export const actions = {
  nuxtServerInit({dispatch}, context) {
    return Promise.all([
      dispatch('fetchTransactions', context)
    ]);
  },
  pushTransaction() {

  },
  async fetchTransactions() {
    const ref = fireDb.collection("transactions");
    let snap;
    try {
      snap = await ref.get();
      console.log(snap);
    } catch (e) {
      console.error(e);
    }
    this.transactions = snap.data().text;
    this.readSuccessful = true;
  }
}

export const getters = {
  transactions: s => s.transactions
}
