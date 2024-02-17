<template>
  <figure class="creaBlock creaBlockPrez" @click.stop>
    <div class="lineSeparator"></div>
    <div class="blocImg">
      <img :src="imgSrc" :title="imgTitle">
    </div>
    <!--		<figcaption>-->
    <!--			{{ title }}-->
    <!--		</figcaption>-->
<!--    <p>{{ character }}</p>-->

  </figure>
</template>

<script setup>
const props = defineProps({
  title:{type: String},
  imgSrc:{type: String},
  imgTitle:{type: String},
  character:{type:String}
})
</script>

<style src="~/assets/css/sections/image-card.css"/>
