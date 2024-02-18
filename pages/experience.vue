<template>
  <div>
    <glider/>
  </div>
</template>

<script>
import Glider from "~/components/landing/glider.vue";

export default {
  components: {Glider}

}
</script>

<style lang="scss">
.dark{
  .glider-component{
    //background-image: linear-gradient(to right, black 35%, rgb(19, 18, 25) 35%, rgb(19, 18, 25) 100%);
    background-color: black;
  }
}
.light{
  .glider-component{
    background: #f0f0f0 ;
  }
}
</style>
