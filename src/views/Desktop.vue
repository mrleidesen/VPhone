<template>
  <div class="desktop">
    <div class="desktop-main">

    </div>
    <div class="desktop-dock">
      <v-container>
        <v-row align="center" dense style="height: 100%">
          <v-col cols="3">
            <desktop-icon 
              icon="mdi-phone-dial"
              iconColor="success"
            />
          </v-col>
          <v-col cols="3">
            <desktop-icon 
              icon="mdi-chat-processing"
              iconColor="success"
            />
          </v-col>
          <v-col cols="3">
            <desktop-icon 
              icon="mdi-camera"
              iconColor="blue-grey darken-2"
            />
          </v-col>
          <v-col cols="3">
            <desktop-icon 
              icon="mdi-google-chrome"
              iconColor="orange darken-2"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import DesktopIcon from '@/components/DesktopIcon'
export default {
  name: 'Desktop',

  components: {
    DesktopIcon
  }
}
</script>

<style lang="less">
.desktop {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &-main {
    flex: 1;
    box-sizing: border-box;
    padding: 8px;
  }

  &-dock {
    // max-height: 80px;
    // height: 7vh;
    // min-height: 70px;
  }
}
</style>
