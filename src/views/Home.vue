<script setup>

</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div>
      <Header class=" sticky top-0 z-10"/>
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import HomeContent from './HomeContent.vue';

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    HomeContent
  },
}
</script>
