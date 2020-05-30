<template>
  <div class="links">
    <div v-for="link in links" :key="'link' + link.url" class="link">
      <a :href="link.url">{{ link.title }}</a>
    </div>
  </div>
</template>
<script>
import links from '../../links.json'
export default {
  setup() {
    return {
      links
    }
  }
}
</script>
<style>
.links {
  margin-top: 10px;
  padding-top: 20px;
  margin-bottom: 100px;
}
.link {
  color: #0000ce;
  font-size: 22px;
  margin-button: 10px;
}
</style>
