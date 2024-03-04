<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
    
  const email = ref('');
  const password = ref('');
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };
</script>


<template>
  <div class="flex items-center lg:px-[10%] w-full max-lg:justify-center lg:justify-start min-w-screen min-h-screen">
    <div class="w-full max-w-lg px-8">
      <div class="bg-black/30 w-full min-h-[400px] md:min-h-[500px] rounded-3xl shadow-lg px-8 flex items-center backdrop-filter backdrop-blur-sm">
        <form class="w-full">
          <p class="font-bold text-2xl tracking-widest">Login</p>
          <div class="mb-4">
            <q-input outlined v-model="email" label="Email" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor, insira o email']" />
          </div>
          <div class="mb-4">
            <q-input outlined type="password" v-model="password" label="Senha" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor, insira a senha']" />
            <a class="text-sm hover:text-black/70" href="#">Esqueceu a senha?</a>
          </div>
          <div class="w-full mb-4">
            <q-btn @click="goHome" label="Entrar" class="text-white !w-full bg-primary" />
          </div>
          <span class="text-sm hover:text-black/70">Não tem conta ainda ? 
            <a class="font-semibold" href="#">Cadastre-se</a>
          </span>
        </form>
      </div>
    </div>
      <img class="-z-10 w-3/5 lg:!block max-lg:hidden absolute right-16" src="../../assets/icons/shop.svg" alt="">
  </div>
</template>
