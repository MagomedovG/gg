<template>
  <div>
    <div v-show="complete" class="complete">
      <div class="complete-content">Я получил ваше сообщение в телеграмм</div>
    </div>
    <div v-show="notComplete" class="complete err">
      <div class="complete-content err-content">Заполните все поля</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// const isComplete = ref(false)
const props = defineProps({
  complete:{type:Boolean},
  notComplete:{type:Boolean}
})
</script>

<style lang="scss" scoped>
.complete {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  border-radius: 10px;
  border:2px solid rgb(0,178,107)
}
.err{
  background: rgba(175, 8, 8, 0.4) !important;
  border:1px solid #AF0808;
}
.err-content{
  color: #AF0808 !important;
}
.dark {
  .complete{
    background-color: #f0f0f0;
  }
  .complete-content{
    color:black;
  }
}

.light {
  .complete {
    background-color: #fff;
  }
  .complete-content{
    color: rgb(120,120,126);
  }
}
.complete-content {
  font-family: 'Sen', sans-serif;
  white-space: nowrap;
  font-size: 18px;
  padding: 20px;
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .complete-content{
    font-size: 15px;
    padding: 15px;
  }
  .complete{
    right: 20px;
    left: 20px;
  }
}
</style>

