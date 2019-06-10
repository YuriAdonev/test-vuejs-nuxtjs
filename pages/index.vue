<template>
  <section>
    <h1>Каталог</h1>
    <GoodsList />
    <PayForm />
  </section>
</template>

<script>
  import GoodsList from '@/components/GoodsList';
  import PayForm from '@/components/PayForm'

  export default {
    components: {
      GoodsList,
      PayForm
    }
  }
</script>
