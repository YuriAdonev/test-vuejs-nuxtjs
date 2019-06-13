<template>
  <section>
    <h1>Панель администратора</h1>
    <Transactions />
  </section>
</template>

<script>
  import Transactions from '@/components/Transactions';

  export default {
    components: {
      Transactions
    },
    middleware: ['auth']
  }
</script>
