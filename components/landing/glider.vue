<template>
  <page-section class="collab glider-component" data-aos="fade-up">
    <h2 class="mt-32 mb-32">{{ $t('glider.title') }}</h2>
    <div class="collab-buttons">
      <input type="radio" id="tab-1" name="tabs" class="tab-radio" v-model="activeEl" value="1">
      <label for="tab-1" class="collab-button" :class="{ 'collab-buttons-active': activeEl === 1 }" @click="getRepresentation">
        {{ $t('glider.button1') }}
      </label>

      <input type="radio" id="tab-2" name="tabs" class="tab-radio" v-model="activeEl" value="2">
      <label for="tab-2" class="collab-button" :class="{ 'collab-buttons-active': activeEl === 2 }" @click="getDealing">
        {{ $t('glider.button2') }}
      </label>

      <input type="radio" id="tab-3" name="tabs" class="tab-radio" v-model="activeEl" value="3">
      <label for="tab-3" class="collab-button" :class="{ 'collab-buttons-active': activeEl === 3 }" @click="getPartnership">
        {{ $t('glider.button3') }}
      </label>

      <div class="glider" :style="{ transform: 'translateX(' + (activeEl - 1) * 100 + '%)' }"></div>
    </div>
    <div class="collab-content mb-32" >
      <span class="first-descr" style="white-space: pre-wrap" v-if="activeEl===1">{{ $t('glider.vue') }}</span>
      <span class="item_title" style="white-space: pre-wrap" v-if="activeEl===2">{{ $t('glider.react') }}</span>
      <span class="item_title" style="white-space: pre-wrap" v-if="activeEl===3">{{ $t('glider.templates') }}</span>
    </div>
  </page-section>
</template>

<script setup>
import {ref} from "vue";
import PageSection from "~/components/common/page-section.vue";
const activeEl = ref(1)

const getRepresentation = () => {
  activeEl.value = 1
}

const getDealing = () => {
  activeEl.value = 2
}

const getPartnership = () => {
  activeEl.value = 3
}
</script>

<style src="~/assets/css/components/glider.css"/>
