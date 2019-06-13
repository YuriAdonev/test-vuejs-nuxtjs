<template>
  <div class="transactions">
    <h2 class="transactions__title">Платежи:</h2>
    <ul class="transactions__list row">
      <li v-for="transaction of transactions" :key="transaction.key" class="transactions__item col-md-2">
        {{ transaction }}
        <button type="button" class="btn btn-secondary">Отменить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>
