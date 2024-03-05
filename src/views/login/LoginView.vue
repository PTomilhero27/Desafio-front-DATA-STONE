<script setup lang="ts"></script>

<template>
  <div
    class="flex items-center lg:px-[10%] w-full max-lg:justify-center lg:justify-start min-w-screen min-h-screen"
  >
    <div class="w-full max-w-lg px-8">
      <div
        class="bg-indigo-300/15 w-full min-h-[400px] md:min-h-[500px] rounded-3xl shadow-lg px-8 flex items-center backdrop-filter backdrop-blur-sm"
      >
        <RouterView />
      </div>
    </div>
    <img
      class="-z-10 w-3/5 lg:!block max-lg:hidden absolute right-16"
      src="../../assets/icons/shop.svg"
      alt=""
    />
  </div>
</template>
