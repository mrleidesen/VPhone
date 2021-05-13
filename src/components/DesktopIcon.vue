<template>
  <div class="desk-icon">
    <div 
      v-if="icon"
      class="desk-icon-img"
    >
      <v-icon
        :color="iconColor"
        x-large
      >{{ icon }}</v-icon>
    </div>
    <div 
      v-else
      class="desk-icon-img"
    >
      <img :src="img" alt="icon">
    </div>

    <span 
      v-show="label" 
      class="desk-icon-label"
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