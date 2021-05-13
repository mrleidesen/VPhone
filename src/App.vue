<template>
  <v-app>
    <system-bar></system-bar>

    <v-main :class="{'isDesktop': isDesktop}">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SystemBar from './components/system/SystemBar'
export default {
  name: 'App',

  components: {
    SystemBar
  },

  data: () => ({
    isDesktop: true
  }),

  watch: {
    $route(newVal) {
      this.isDesktop = (newVal.name === 'Desktop')
    }
  },
}
</script>

<style lang="less">
.isDesktop {
  background: url('./assets/bg.png') center/cover;
}

html {
  overflow-y: auto !important;
}
</style>
