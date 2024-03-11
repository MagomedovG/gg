<template>
  <div>
    <first-section/>
    <glider />
    <div >
      <friend-section />
    </div>
    <div class="stack">
      <div class="stack-container">
        <stack-slides :stack="stackIcons"/>
      </div>
    </div>

    <chat-form id="form" @isComplete="completedForm" @notComplete="errorForm"/>
    <completed :complete="complete" :notComplete="notComplete"/>

<!--    <glider />-->
  </div>
</template>

<script setup>

import FirstSection from "~/components/landing/first-section.vue";
import FriendSection from "~/components/landing/friend-section.vue";
import StackSlides from "~/components/landing/stack-slides.vue";
import ChatForm from "~/components/landing/chat-form.vue";
import Glider from "~/components/landing/glider.vue";
import Completed from "~/components/dialog/completed.vue";
const complete = ref(null)
const notComplete = ref(false)
const completedForm = () => {
  complete.value = true
  setTimeout(() => {
    complete.value = false
  }, 2500)
  console.log(complete.value)
}
const errorForm = () => {
  notComplete.value = true
  setTimeout(() => {
    notComplete.value = false
  }, 2500)
  console.log(notComplete.value)
}
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
.light .stack{
  background-color: #f0f0f0;
}
.stack div {
  display: flex;
  flex-direction: row;
}
.stack-container {
  max-width: 95vw;
  height: 60px;
  margin: 0 auto;
}
@media screen and (max-width: 450px){
  .dark .stack{
    padding: 15px 0;
  }
  .stack-container{
    height: 40px;
  }
}
</style>
