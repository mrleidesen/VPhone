<template>
  <v-app>
    <system-bar></system-bar>

    <v-main>
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
  }
};
</script>
