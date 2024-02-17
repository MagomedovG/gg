<template>
  <div class="section-wrapper">
    <section class="section">
      <slot />
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: "var(--grey-d)" },
});
</script>

<style src="~/assets/css/common/page-section.css" />
