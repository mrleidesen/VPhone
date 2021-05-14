<template>
  <div class="w-full h-full overflow-auto overscroll-none">
    <v-container>
      <div class="w-full h-9 flex items-center justify-between">
        <span class="text-xl font-semibold text-gray-700">设置</span>
        <v-spacer></v-spacer>
        <v-icon
          color="grey darken-4"
        >mdi-magnify</v-icon>
      </div>

      <div class="w-full flex flex-col mt-2">
        <div 
          v-for="(item, i) in items"
          :key="i"
          class="flex h-14 items-center"
        >
          <v-icon 
            medium
            :color="item.color"
          >{{ item.icon }}</v-icon>
          <span class="ml-4 text-lg">{{ item.text }}</span>

          <v-spacer></v-spacer>

          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Settings',

  data: () => ({
    items: [
      { text: 'WIFI', icon: 'mdi-wifi', color: 'blue' },
      { text: '移动数据', icon: 'mdi-cable-data', color: 'success' },
      { text: '蓝牙', icon: 'mdi-bluetooth', color: 'blue' },
      { text: '飞行模式', icon: 'mdi-airplane', color: 'orange' },
      { text: '定位服务', icon: 'mdi-map-marker', color: 'gray' },
      { text: '亮度', icon: 'mdi-brightness-6', color: 'orange' },
      { text: '声音和震动', icon: 'mdi-volume-high', color: 'blue' },
      { text: '应用管理', icon: 'mdi-android', color: 'teal' },
    ],
  })
}
</script>