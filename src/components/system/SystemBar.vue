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

    <div 
      v-touch="{
        move: onTouchMove,
        end: onTouchEnd
      }"
      class="system-bar-mask"
      :class="{'system-bar-mask--dragging': isDragging, 'system-bar-mask--active': isDown}"
      :style="`transform: translateY(${offset}px)`"
    ></div>
  </v-system-bar>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'SystemBar',
  
  data() {
    return {
      formatTime: dayjs().format('HH:mm'),
      timer: null,
      offset: 0,
      isDragging: false,
      isDown: false,
      lastEndOffset: 0
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

    onTouchMove(e) {
      this.isDragging = true
      this.isDown = false
      const { offset } = this
      const maxHeight = document.body.offsetHeight - 25
      const touchEndChangeOffset = e.touchstartY - e.touchmoveY

      if (touchEndChangeOffset < 0) {
        // down
        if (offset < maxHeight) {
          this.offset = e.touchmoveY
        } else {
          this.offset = maxHeight
        }
      } else {
        // up
        if (offset > 0) {
          this.offset = maxHeight - touchEndChangeOffset
        }
      }
    },
    onTouchEnd(e) {
      this.isDragging = false
      const maxHeight = document.body.offsetHeight - 25
      const touchEndChangeOffset = e.touchstartY - e.touchendY

      if (touchEndChangeOffset <= -80) {
        this.offset = maxHeight
        this.lastEndOffset = maxHeight
        this.isDown = true
      } else if (e.touchstartY - e.touchendY >= 80) {
        this.offset = 0
        this.lastEndOffset = 0
        this.isDown = false
      } else {
        this.offset = this.lastEndOffset
        this.isDown = this.lastEndOffset === maxHeight
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
    opacity: 0;
    transform: translateY(0);
    transition: transform .3s ease-in-out, opacity .3s ease-in-out, background-color .3s ease-in-out;
    user-select: none;

    &:active {
      background-color: #000;
      opacity: .2;
    }

    &--dragging {
      opacity: .5;
      background-color: #000;
      transition: transform 0s ease-in-out, opacity .3s ease-in-out, background-color .3s ease-in-out !important;
    }

    &--active {
      opacity: .7;
      background-color: #000;
    }
  }
}
</style>