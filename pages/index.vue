<template>
  <div>
    <first-section/>
    <div >
      <friend-section />
    </div>
    <div class="stack">
      <div class="stack-container">
        <stack-slides :stack="stackIcons"/>
      </div>

    </div>

    <chat-form id="form"/>


<!--    <glider />-->
  </div>
</template>

<script setup>

import FirstSection from "~/components/landing/first-section.vue";
import FriendSection from "~/components/landing/friend-section.vue";
import StackSlides from "~/components/landing/stack-slides.vue";
import ChatForm from "~/components/landing/chat-form.vue";

const stackIcons = ref([
    'nuxt3.svg',
    'tailwindcss.svg',
    'vue3.png',
    'github.svg',
    'nuxt-svgrepo-com.svg',
    'javascript-svgrepo-com.svg',
    'html-5-svgrepo-com.svg',
    'react-svgrepo-com.svg'
])

</script>

<style lang="scss">
.dark .stack{
  padding: 45px 0;
  background-color: rgb(19, 18, 25);
}
.stack div {
  display: flex;
  flex-direction: row;
}
.stack-container {
  max-width: 95vw;
  height: 90px;
  margin: 0 auto;
}
</style>
