<template>
  <page-section class="map flex flex-row" style="padding-bottom: 78px">
    <div class="width-40">
      <h2 style="text-align: left;" class="mt-32">
        {{ $t('friend.title')}}
      </h2>
      <span>
        {{ $t('friend.descr')}}
      </span>
    </div>
    <div  style="position: relative">
      <interactive-friend  :imageUrl="imageSrc" :labels="labels"/>
      <p class="clickhere">Click for name!</p>
    </div>
  </page-section>
</template>

<script setup>
import PageSection from "~/components/common/page-section.vue";
import InteractiveFriend from "~/components/UI/interactive-friend.vue";

const imageSrc = ref('/friends.jpg');
const labels = ref([
  { title: 'Ахмедов Шамиль', left: 18, top: 63, content: 'Содержание метки 1' },
  { title: 'Гаджиев Магомед', left: 67, top: 55, content: 'Содержание метки 2' },
  { title: 'Гасанов Магомед', left: 50, top: 65, content: 'Содержание метки 1' },
  // { title: 'Питер', left: 21, top: 42, content: 'Содержание метки 1' },
  // { title: 'Кама', left: 40, top: 42, content: 'Содержание метки 1' },
  // { title: 'Дауд', left: 70, top: 60, content: 'Содержание метки 1' },
  // { title: 'мухамкамиль', left: 75, top: 80, content: 'Содержание метки 1' },
  // { title: 'Восемь', left: 35, top: 18, content: 'Содержание метки 1' },
  // { title: 'Девять', left: 43, top: 56, content: 'Содержание метки 1' },
  // { title: 'Десять', left: 50, top: 60, content: 'Содержание метки 1' },
]);

// const goTo = () => {
// 	console.log('goTo')
// }
// const showRequest = () => {
// 	console.log('showRequest')
// }
</script>

<style src="~/assets/css/sections/friend.css"/>
