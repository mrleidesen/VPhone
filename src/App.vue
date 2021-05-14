<template>
  <v-app class="h-screen">
    <system-bar @changeBlur="onChangeBlur"></system-bar>

    <v-main class="filter h-full overflow-hidden" :class="{'isDesktop': isDesktop, 'blur': isBlur}">
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
    isDesktop: true,
    isBlur: false
  }),

  watch: {
    $route(newVal) {
      this.isDesktop = (newVal.name === 'Desktop')
    }
  },

  methods: {
    onChangeBlur(val) {
      this.isBlur = val
    },
  },
}
</script>

<style lang="less">
.isDesktop {
  background: url('./assets/bg.png') center/cover;
}

html {
  overflow-y: auto !important;
  overscroll-behavior: none;
}
</style>
