<template>
  <section>
    <h1>Панель администратора</h1>
    <el-table
      :data="transactions"
      stripe
      :default-sort = "{prop: 'date', order: 'descending'}"
      style="width: 100%">
        <el-table-column
          prop="date"
          label="Дата транзакции"
          sortable
          width="180">
          <template slot-scope="{row: {date}}">
            <span>{{ new Date(date).toLocaleString() }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="product"
          label="Название товара"
          sortable
          width="280">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="Телефон"
          sortable>
        </el-table-column>
        <el-table-column
          prop="amount"
          label="Цена"
          sortable>
        </el-table-column>
        <el-table-column
          prop="status"
          label="Статус"
          sortable>
          <template slot-scope="{row: {status}}">
            <span v-if="status">Оплачен</span>
            <span v-if="!status">Отменен</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Действия">
          <template slot-scope={row}>
            <el-button
              size="mini"
              type="danger"
              @click="cancelTransaction(row._id)">Отменить</el-button>
          </template>
        </el-table-column>
      </el-table>
  </section>
</template>

<script>
  export default {
    middleware: ['auth'],
    async asyncData({store}) {
      const transactions = await store.dispatch('transactions/fetchTransactions');
      return {transactions};
    },
    methods: {
      async cancelTransaction(id) {
        try {
          await this.$confirm('Отменить транзакцию?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Нет',
            type: "warning"
          });
          
          await this.$store.dispatch('transactions/cancel', id);
          this.$router.push('/admin');
          this.$message({
            message: 'Транзакция отменена',
            type: 'success'
          });
        } catch (e) {
          
        }
      }
    }
  }
</script>
