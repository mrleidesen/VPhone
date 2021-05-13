<template>
  <div class="desktop">
    <div class="desktop-main">
      <swiper class="desktop-swiper-wrapper" :options="swiperOptions">
        <swiper-slide class="desktop-swiper-item">
          <v-container>
            <v-row align="center" dense>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
            </v-row>
          </v-container>
        </swiper-slide>

        <swiper-slide class="desktop-swiper-item">
          <v-container>
            <v-row align="center" dense>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
              <v-col cols="3">
                <desktop-icon 
                  icon="mdi-phone-dial"
                  iconColor="success"
                />
              </v-col>
            </v-row>
          </v-container>
        </swiper-slide>
      </swiper>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Desktop',

  data: () => ({
    swiperOptions: {
    }
  }),

  components: {
    DesktopIcon,
    Swiper,
    SwiperSlide
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
    width: 100%;
    overflow: hidden;
  }

  &-swiper {
    &-wrapper {
      display: flex;
      height: 100%;
    }
    &-item {
      width: 100vw;
      height: 100%;
      box-sizing: border-box;
    }
  }

}
</style>
