<template>
  <page-section class="header_section">
    <header class="header flex-row justify-between items-center">
      <div class="flex-row items-center justify-between adaptive-header">
        <h1 class="font-black text-3xl">MagomedovG.</h1>
        <input type="checkbox"  v-model="darkMode">
        <div class="header-translate flex-row">
          <button class="lang-btn" @click="changeLanguage('ru')" :class="{ 'active-lang' : activeRu }">RU</button>
          <button class="lang-btn" @click="changeLanguage('en')" :class="{ 'active-lang' : activeEn }">EN</button>
        </div>
      </div>
      <div class="flex-row justify-between header-links">
        <nuxt-link class="header-link">{{ $t('experience') }}</nuxt-link>
        <nuxt-link class="header-link">{{ $t('work') }}</nuxt-link>
        <nuxt-link class="header-link" >{{ $t('photo') }}</nuxt-link>
        <nuxt-link class="header-link" to="#form">{{ $t('contact') }}</nuxt-link>
      </div>
    </header>

  </page-section>

</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import en from "~/locales/en.json";
import ru from "~/locales/ru.json";
import PageSection from "~/components/common/page-section.vue";
const { locale, t } = useI18n()
const activeRu = ref(false)
const activeEn = ref(true)

const darkMode = ref(true)

const emit = defineEmits(["dark-mode"])
watch(darkMode, (newValue) => {
  localStorage.setItem('darkMode', newValue ? 'dark' : 'light');
  if (localStorage.getItem('darkMode') === 'dark'){
    emit("dark-mode",true)
  } else {
    emit("dark-mode",false)
  }

});
locale.value = 'en'
const changeLanguage = (newLocale) => {
  locale.value = newLocale
  if (newLocale === 'ru'){
    activeRu.value = true
    activeEn.value = false
  } else {
    activeEn.value = true
    activeRu.value = false
  }
  localStorage.setItem('lang', locale.value)

}

</script>
<style lang="scss" scoped>
.lang-btn{
  padding: 8px;
}

.header_section{
  width: 100%;
  height: 88px;
}
.header-links{
  width: 476px;
}
.header-link{
  font-weight: 700;
  padding: 32px 24px;
}

.light{
  .header_section{
    background-image: linear-gradient(to right, #f0f0f0 35%, #ddd 35%, #ddd 100%);
  }
  .active-lang{
    background: #4e89ee;
  }
  .lang-btn:hover{
    background: #265fc1;
    scale: 1.04;
  }
  .header-link:last-child{
    background: #4e89ee;
  }
  .header-link:last-child:hover{
    background: #265fc1;
    scale: 1.02;
  }
  h1{
    color:black;
  }
}
.dark{
  .header_section{
    background-image: linear-gradient(to right, black 35%, rgb(19,18,25) 35%, rgb(19,18,25) 100%);
  }
  .active-lang{
    background: rgba(82, 33, 230, 1);
  }
  .lang-btn:hover{
    background: rgba(82, 33, 230, 0.4);
    scale: 1.08;
  }
  .header-link:last-child{
    background: rgba(82, 33, 230, 1);
  }
  .header-link:last-child:hover{
    background: rgba(82, 33, 230, 0.8);
    scale: 1.02;
  }
  h1{
      color:white;
    }
}
.adaptive-header{
  width: 250px;
}
@media screen and (max-width: 600px) {
  .header-links{
    display: none;
  }
  .adaptive-header{
    width: 100%;
  }
}
</style>



