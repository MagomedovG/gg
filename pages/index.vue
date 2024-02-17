<template>
  <div>
    <first-section/>
    <div >
      <friend-section />
    </div>
    <chat-form id="form"/>


<!--    <glider />-->
  </div>
</template>

<script>
import FirstSection from "~/components/landing/first-section.vue";
import ChatForm from "~/components/landing/chat-form.vue";
import Glider from "~/components/landing/glider.vue";
import FriendSection from "~/components/landing/friend-section.vue";
export default {
  components: {FriendSection, Glider, ChatForm, FirstSection}

}

</script>

<style lang="scss" scoped>

</style>
