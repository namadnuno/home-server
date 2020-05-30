<template>
  <div class="status">
    Temperatura:
    <h1>{{ temperature }}º</h1>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      temperature: 10
    }
  }
}
</script>
<style>
.status {
  margin-top: 10px;
  padding-top: 20px;
}
</style>
