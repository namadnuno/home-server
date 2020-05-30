<template>
  <div class="body">
    <div>
      <Temperature />
      <Links />
    </div>
  </div>
</template>

<script>
import Temperature from './components/Temperature.vue'
import Links from './components/Links.vue'

export default {
  name: 'App',
  components: {
    Temperature,
    Links
  }
}
</script>

<style>
.body {
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
