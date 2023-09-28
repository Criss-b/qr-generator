<template>
  <RouterView />
  <footerComponent></footerComponent>
</template>

<script>
import footerComponent from "@/components/footer.vue"
export default {
  name: 'App',
  components: { footerComponent, }
}
</script>

<style lang="scss" scoped>
template {
  width: 100%;
}
@media screen and (max-width: 320px) {
  template {
  width: 100%;
}
}
</style>
