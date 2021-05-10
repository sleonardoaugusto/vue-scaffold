<template>
  <h1>Home</h1>
</template>

<script>
import services from '@/services'

export default {
  name: 'Home',
  async created() {
    await services.vueScaffold.getVueScaffold()
  }
}
</script>

<style scoped></style>
