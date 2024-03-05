<template>
  <div>
    <HeaderComponent />
    <main class="w-full h-[calc(100vh-80px)] bg-primary  px-4 lg:px-[100px]">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from '../components/HeaderView.vue';

</script>
