<template>
    <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="4"
        :spaceBetween="70"
        :loop="true"
        :loop-fill-group-with-blank="true"
        :speed="5000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"

    >
      <Swiper-Slide  v-for="icon in stack" :key="icon">
  <!--      <p>{{icon}}</p>-->
        <img :src="icon" style="height: 100%" alt="">
      </Swiper-Slide>

    </Swiper>
</template>


<script setup>
import 'swiper/css'
const props = defineProps({
  stack:{type:Array}
})
</script>

<style>
.swiper-slide img{
  object-fit: contain;
}
</style>
