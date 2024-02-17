<template>
  <div @click.stop>
    <div class="interactive-map" >
      <div class="image-container">
        <img ref="image" :src="imageUrl" alt="Image with labels" />
        <div
            v-for="(label, index) in labels"
            :key="index"
        >
          <div class="inter" style="position: absolute" :style="{ left: label.left + '%', top: label.top + '%' }">
            <div>
              <div class="interactive-point"></div>
              <p
                  class="interactive-country"
                  @click="handleLabelClick(index)"
              >
                {{ label.title }}
              </p>
              <button
                  class="label"

                  @click="handleLabelClick(index)"
              >
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div class="image-card" @click="active=false"  v-if="active & activeProps">
      <div class="image-card-wrapper" @click.stop>
        <button class="close-image-card" @click="active=false">X</button>
        <image-card
            v-for="(item, index) in gallery"
            :key="index"
            :title="item.title"
            :img-src="item.img.src"
            :img-alt="item.img.alt"
            :img-title="item.img.title"
            :character="item.title"
        />
        <div class="text-image-card">
          <p>"{{gallery[0].title}}"</p>
          <p style="text-align: right">(c) {{gallery[1].title}}</p>
        </div>

      </div>

    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import ImageCard from "~/components/UI/image-card.vue";
const gallery = ref()
const galleries = ref([
  [
    {
      title: "Магомедов Гамзат - очень коммуникабельный и активный человек. Умеет предрасполагать к себе собеседника. Ответственно относится к своей работе и доводит дело до идеала. Всегда стремится к большему и не сидит на месте. Очень быстро вливается в коллектив",
      img: {
        src: "ahmedov1.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplashrr"
      }
    },
    {
      title: "Ахмедов Шамиль - Тех.Директор 'НОК Журавли'",
      img: {
        src: "ahmedov2.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Kitten: Ollie (12 Weeks)",
      img: {
        src: "ahmedov3.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Kitten: Ollie (12 Weeks)",
      img: {
        src: "ahmedov4.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Море море",
      img: {
        src: "ahmedov5.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplashr"
      }
    },
  ],
  [
    {
      title: "Магомедов Гамзат - Энергичный, целеустремленный и амбициозный. Это три главные причины почему он должен работать в вашей компании. Не боится критики, адекватно оценивает свои навыки и работу, быстро вписывается в коллектив, и запросто становится душой всей компании. К этому всему могу добавить еще что парень голоден в знаниях, быстро обучаем и просто готов к любой работе!",
      img: {
        src: "gajiev1.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Гаджиев Магомед - Руководитель отдела бизнес-аналитики 'Дизайн сервис'",
      img: {
        src: "gajiev2.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Море",
      img: {
        src:"gajiev3.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Горы",
      img: {
        src:"gajiev4.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Крепость",
      img: {
        src: "gajiev5.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
  ],
  [
    {
      title: "Москва",
      img: {
        src: "gasanov1.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Гасанов Магомед - студент Медицинского университета, брат",
      img: {
        src: "gasanov2.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Москва",
      img: {
        src:"gasanov3.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Москва",
      img: {
        src:"gasanov4.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
    {
      title: "Москва",
      img: {
        src: "gasanov5.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
        title: "Photo by The Lucky Neko for Unsplash"
      }
    },
  ],

])
const props = defineProps({
  imageUrl: { type: String },
  labels: { type: Object },
  activeProps: { type:Boolean, default:true }
});

const selectedLabel = ref(null);
const imageUrl = ref(props.imageUrl);
const labels = ref(props.labels);
let active = ref(false)

const handleImageClick = (event) => {
  const image = $refs.image;
  const rect = image.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width * 100;
  const y = (event.clientY - rect.top) / rect.height * 100;

  // Создайте новую метку и добавьте в массив меток
  // Здесь предполагается, что у вас есть метод, который добавляет метку в хранилище
  $store.dispatch('addLabel', { title: 'Новая метка', left: x, top: y, content: 'Содержание метки' });
};
const handleLabelClick = (index) => {
  selectedLabel.value = index;
  gallery.value = galleries.value[index]
  if (active.value === false){
    active.value = true
  } else {
    active.value = false
  }
};
</script>

<style src="~/assets/css/sections/interactive-friend.css"/>
