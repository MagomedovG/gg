<template>
  <page-section class="chat-form">
    <div class="flex flex-row justify-between mt-32 mb-32 form">
      <div class="w-5/12 form">
        <h2 class="chat-title mb-3">
          {{$t('form.title')}}
        </h2>
        <span class="chat-description">{{$t('form.descr')}}</span>
      </div>
      <form class="form flex flex-col w-5/12" method="post" @submit.prevent="submit">
        <label for="message" class="mb-2">{{$t('form.message')}}</label>
        <input class="mb-10" type="text" id="message" v-model="message.text" placeholder="Сообщение для меня">
        <label for="name" class="mb-2">{{$t('form.name')}}</label>
        <input type="text" class="mb-10" id="name" v-model="message.company" placeholder="Имя">
        <label for="email" class="mb-2">{{$t('form.email')}}</label>
        <input type="text" class="mb-10" id="email" v-model="message.number" placeholder="Почта/Телеграмм">
        <button type="submit">{{ $t('contact') }}</button>
      </form>
    </div>
  </page-section>
</template>

<script setup>
import PageSection from "~/components/common/page-section.vue";
import { ref } from 'vue'
import { defineEmits } from 'vue'

const message = ref({
  number:"",
  text:"",
  company:""
})
const token = ref('6125836753:AAGQOkhgwaq5HvoBh4En6Tuf5H5PWVhxx5A')
const chatId = ref('748685783')
const emit = defineEmits(["is-complete", "not-complete"])
const postData = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error.message);
  }
}

const submit = () => {
  // Проверяем, что все поля заполнены
  if (message.value.text && message.value.company && message.value.number) {
    const fullMessage = `Сообщение от компании ${message.value.company}: "${message.value.text}"
    Номер для связи: ${message.value.number}`
    postData(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${fullMessage}`)
        .then(() => {
          message.value.text = ""
          message.value.company  = ""
          message.value.number = ""
          emit("is-complete", true)
        })
        .catch(error => {
          console.error('Error sending message:', error);
          emit("not-complete", true)
        });
  } else {
    // Если какое-то поле не заполнено, отправляем false
    emit("not-complete", true)
  }
}
</script>

<style lang="scss" scoped>
.dark {
  input{
    background: rgba(24, 24, 35, 1);
  }
  .chat-form{
    background-color: black;
  }
  button{
    background: rgba(82, 33, 230, 1);
    padding: 30px;
  }
  button:hover{
    background: rgba(82, 33, 230, 0.8);
    scale: 1.008;
  }
}
.light{
  .chat-form{
    background-color: #f0f0f0;
  }
  input{
    background-color: #eeeeee;
  }
  button{
    background: #4e89ee;
    padding: 30px;
  }
  button:hover{
    background: #265fc1;
    scale: 1.008;
  }
}
input{
  padding: 20px 15px;
}
@media screen and (max-width: 450px){
  .form{
    flex-direction: column !important;
    width: 100% !important;
  }
}



</style>

