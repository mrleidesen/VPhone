<template>
  <v-system-bar
    height="25"
    app
    lights-out
    dark
    fixed
  >
    <span>{{ formatTime }}</span>

    <v-spacer></v-spacer>

    <v-icon size="small">mdi-wifi-strength-4</v-icon>
    <v-icon size="small">mdi-signal-cellular-outline</v-icon>
    <v-icon size="small">mdi-battery</v-icon>
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