<template>
  <page-section class="collab" data-aos="fade-up">
    <h1 class="collab-title">{{ $t('glider.title') }}</h1>
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
    <div class="collab-content" >
      <p class="item_title" style="white-space: pre-wrap" v-if="activeEl===1">{{ $t('collaboration.representation') }}</p>
      <p class="item_title" style="white-space: pre-wrap" v-if="activeEl===2">{{ $t('collaboration.dealing') }}</p>
      <p class="item_title" style="white-space: pre-wrap" v-if="activeEl===3">{{ $t('collaboration.partnership') }}</p>
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
