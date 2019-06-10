<template>
  <section>
    <h1>Админка</h1>
    <Transactions />
  </section>
</template>

<script>
  import GoodsList from '@/components/GoodsList';
  import PayForm from '@/components/PayForm';
  import Transactions from '@/components/Transactions';

  export default {
    components: {
      GoodsList,
      PayForm,
      Transactions
    }
  }
</script>
