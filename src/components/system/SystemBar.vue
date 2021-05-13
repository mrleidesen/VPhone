<template>
  <v-system-bar
    height="25"
    app
    lights-out
    dark
    fixed
    class="system-bar"
  >
    <span>{{ formatTime }}</span>

    <v-spacer></v-spacer>

    <v-icon size="small">mdi-wifi-strength-4</v-icon>
    <v-icon size="small">mdi-signal-cellular-outline</v-icon>
    <v-icon size="small">mdi-battery</v-icon>

    <div class="system-bar-mask"></div>
  </v-system-bar>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'SystemBar',
  
  data() {
    return {
      formatTime: dayjs().format('HH:mm'),
      timer: null
    }
  },

  created() {
    this.initTimer()
  },

  methods: {
    initTimer() {
      if (this.timer) {
        this.disposeTimer()
      }
      this.timer = setInterval(() => {
        this.formatTime = dayjs().format('HH:mm')
      }, 1000)
    },

    disposeTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
  },

  destroyed() {
    this.disposeTimer()
  }
}
</script>

<style lang="less">
.system-bar {

  &-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: teal;
    opacity: 0;
  }
}
</style>