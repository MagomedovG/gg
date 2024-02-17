<template>
  <page-section class="fist-section relative">
    <div class="justify-center relative first-section_container">
      <div class="first-img">
        <img src="/My.jpg" alt="" style="position: relative;max-height: 650px">
        <div class="overlay"></div>
      </div>
      <div class="flex-column justify-center items-end z-10">
        <h1 class="first-title">{{$t('first-section.title')}}<p style="color:rgb(120,120,126);">{{$t('first-section.grey')}}</p></h1>
        <p class="first-descr">{{$t('first-section.descr')}}</p>
      </div>
    </div>
  </page-section>

</template>

<script>
import PageSection from "~/components/common/page-section.vue";

export default {
  components: {PageSection}

}
</script>

<style lang="scss" scoped>
.dark{
  .fist-section{
    height:800px;
    background-image: linear-gradient(to right, black 35%, rgb(19,18,25) 35%, rgb(19,18,25) 100%);
  }
  .overlay{
    background-color: rgba(1,1,1,0.5);
    z-index: 9;
    width: 100%;
    height: 100%;
    position:absolute;
    inset:0;
  }
}
.light{
  .fist-section{
    height: 800px;
    background-image: linear-gradient(to right, #f0f0f0 35%, #ddd 35%, #ddd 100%);
  }
}

.first-img{
  max-width: 750px;
  max-height: 650px;
  position: absolute;
  left:-8rem;
}
.first-descr{
  font-family: Sen, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 738px;
}
.first-title{
  font-family: Sen, sans-serif;
  font-size: 65px;
  font-weight: 700;
  line-height: 94px;
  text-align: left;
  max-width: 738px;
}
@media screen and (max-width: 450px) {
  .first-section_container{
    position: inherit;
  }
  .first-img{
    position: relative;
    top:0;
    left:inherit;
    margin-bottom: 50px;
  }
  .first-title{
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 40px;
  }
  .first-descr{
    font-size: 18px;
    line-height: 27px;
  }
}
</style>
