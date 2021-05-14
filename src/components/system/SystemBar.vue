<template>
  <v-system-bar
    height="25"
    app
    lights-out
    dark
    fixed
    class="system-bar"
  >
    <span class="font-medium">{{ formatTime }} {{maxOffset}}</span>

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
      :class="{'system-bar-mask--dragging': isDragging, 'system-bar-mask--active': isDone}"
      :style="`transform: translateY(${offset}px)`"
    >
      <div class="system-bar-wrapper">
        <div class="system-bar-icons">
          <v-container>
            <div class="flex items-center">
              <span class="text-3xl font-semibold text-white">{{ formatTime }}</span>
            </div>
          </v-container>
          <v-container>
            <v-row>
              <v-col 
                v-for="icon in icons"
                :key="icon.id"
                cols="3"
              >
                <div class="flex flex-col items-center justify-center">
                  <div 
                    class="w-10 h-10 rounded-full flex justify-center items-center overflow-hidden"
                    :class="iconActive.includes(icon.id) ? 'bg-white' : 'bg-gray-500'"
                    @click="onToggleIconAcitve(icon.id)"
                  >
                    <v-icon
                      size="large"
                      :color="iconActive.includes(icon.id) ? 'grey darken-4': 'white'" 
                      class="mr-0"
                    >{{ icon.icon }}</v-icon>
                  </div>
                  <div class="text-white text-xs mt-2 truncate">{{ icon.label }}</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
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
      offset: 10,
      minOffset: 10,
      maxOffset: 666,
      isDragging: false,
      isDone: false,
      lastEndOffset: 0,
      iconActive: [1, 2, 6],
      icons: [
        {
          id: 1,
          label: 'Wifi',
          icon: 'mdi-wifi'
        },
        {
          id: 2,
          label: '移动数据',
          icon: 'mdi-cable-data'
        },
        {
          id: 3,
          label: '蓝牙',
          icon: 'mdi-bluetooth'
        },
        {
          id: 4,
          label: '静音',
          icon: 'mdi-bell-cancel-outline'
        },
        {
          id: 5,
          label: '飞行模式',
          icon: 'mdi-airplane'
        },
        {
          id: 6,
          label: '定位服务',
          icon: 'mdi-map-marker'
        },
        {
          id: 7,
          label: '亮度',
          icon: 'mdi-brightness-6'
        },
        {
          id: 8,
          label: '手电筒',
          icon: 'mdi-flashlight'
        },
      ]
    }
  },

  created() {
    this.initTimer()
  },

  mounted() {
    this.maxOffset = document.body.offsetHeight
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
      this.isDone = false
      this.$emit('changeBlur', true)
      
      const { offset, minOffset, maxOffset, lastEndOffset } = this
      const maxHeight = maxOffset - 25
      const touchEndChangeOffset = e.touchstartY - e.touchmoveY
      
      if (touchEndChangeOffset < 0) {
        // down
        if (lastEndOffset !== maxHeight) {
          this.offset = e.touchmoveY > maxHeight ? maxHeight : e.touchmoveY
        }
      } else {
        // up
        if (offset > 0) {
          const minus = maxHeight - touchEndChangeOffset
          this.offset = minus < minOffset ? minOffset : minus
        }
      }
    },
    onTouchEnd(e) {
      this.isDragging = false
      const { minOffset, maxOffset } = this
      const maxHeight = maxOffset - 25
      const touchEndChangeOffset = e.touchstartY - e.touchendY
      const autoChangeMaxOffset = 70

      if (touchEndChangeOffset <= -autoChangeMaxOffset) {
        this.offset = maxHeight
        this.lastEndOffset = maxHeight
        this.isDone = true
        this.$emit('changeBlur', true)
      } else if (e.touchstartY - e.touchendY >= autoChangeMaxOffset) {
        this.offset = minOffset
        this.lastEndOffset = minOffset
        this.isDone = false
        this.$emit('changeBlur', false)
      } else {
        this.offset = this.lastEndOffset
        this.isDone = this.lastEndOffset === maxHeight
        this.$emit('changeBlur', this.lastEndOffset === maxHeight)
      }
    },

    onToggleIconAcitve(id) {
      const { iconActive } = this
      
      if (iconActive.includes(id)) {
        this.iconActive = iconActive.filter(v => v !== id)
      } else {
        this.iconActive = [...iconActive, id]
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
    box-sizing: border-box;
    padding: 8px;
    opacity: 0;
    transform: translateY(0);
    transition: transform .3s ease-in-out, opacity .3s ease-in-out, background-color .3s ease-in-out;
    user-select: none;

    &--dragging {
      opacity: .5;
      background-color: rgba(0, 0, 0, 0.5);
      transition: transform 0s ease-in-out, opacity .3s ease-in-out, background-color .3s ease-in-out !important;
    }

    &--active {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  &-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>