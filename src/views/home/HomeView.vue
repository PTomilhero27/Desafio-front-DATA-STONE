<script setup lang="ts">
  import HeaderView from '@/components/HeaderView.vue';
  import { useRouter } from 'vue-router';
    
  const router = useRouter();

</script>

<template>
  <main class="w-full h-full bg-primary">
    <HeaderView />
    <section class="flex items-center w-full h-[calc(100vh-80px)] max-md:justify-center md:justify-between px-4 lg:px-[100px]">

      <div class="z-10 text-white  max-w-md">
        <h1 class="md:text-3xl text-lg font-bold mb-4">Sistema Integrado de Gestão de Clientes e Produtos</h1>
        <p class="mb-6 text-base">Facilite a gestão comercial com cadastros dinâmicos e associação eficiente de produtos</p>
        <q-btn @click="router.push('/product')" label="Ver produtos" color="secondary" />
      </div>

      <div class="z-10 xl:w-full max-w-sm bg-black/30 p-10 justify-center rounded-3xl shadow-lg flex items-center">
        <img class="w-40 xl:w-full" src="../../assets/icons/suprisebox.svg" alt="Ilustração de um urso com gorro de Natal saindo de uma caixa de presente.">
      </div>

      <img class="w-full absolute left-0 " src="../../assets/icons/backgound.svg" alt="Ilustração de Linhas para o fundo" />
    </section>
  </main>
</template>
