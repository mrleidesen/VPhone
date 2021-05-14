<template>
  <div class="w-full h-full rounded-lg flex flex-col items-center justify-center overflow-hidden">
    <div 
      v-if="icon"
      class="w-14 h-14 rounded overflow-hidden bg-white bg-opacity-20 flex justify-center items-center"
    >
      <v-icon
        :color="iconColor"
        x-large
      >{{ icon }}</v-icon>
    </div>
    <div 
      v-else
      class="w-14 h-14 rounded overflow-hidden bg-white bg-opacity-20 flex justify-center items-center"
    >
      <img class="w-3/4 h-3/4 object-contain" :src="img" alt="icon">
    </div>

    <span 
      v-show="label" 
      class="mt-1 text-xs font-medium text-gray-700"
    >
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'DesktopIcon',

  props: {
    label: String,
    img: String,
    icon: String,
    iconColor: String,
  },
}
</script>

<style lang="less">
.desk-icon {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-img {
    width: 55px;
    height: 55px;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 70%;
      height: 70%;
      object-fit: contain;
    }
  }

  &-label {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 500;
    color: #333;
  }
}
</style>