<template>
  <div :class="{'dark':dark, 'light': !dark}">
    <header-page :dark="dark"  @darkMode="changeMode"/>
    <NuxtPage/>
<!--    <request-dialog v-if="request" @click="closeRequest" @completed="closeRequest"/>-->
  </div>
</template>
<script setup>
import HeaderPage from "~/components/common/header-page.vue";
import {ref} from "vue";
let dark = ref(true)
// const request=ref(false)
// const closeRequest = () =>{
//   request.value=false
// }
// const showRequest = () =>{
//   request.value=true
// }
const changeMode = (value) => {
  console.log(localStorage.getItem('darkMode'), dark);
  dark.value = value
}
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'dark' || !savedDarkMode) {
    dark.value = true;
  } else {
    dark.value = false;
  }
});
</script>
