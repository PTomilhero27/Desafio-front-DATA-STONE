<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <form class="w-full">
    <p class="font-bold text-2xl tracking-widest">Login</p>
    <div class="mb-4">
      <q-input
        outlined
        v-model="email"
        label="Email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor, insira o email']"
      />
    </div>
    <div class="mb-4">
      <q-input
        outlined
        type="password"
        v-model="password"
        label="Senha"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor, insira a senha']"
      />
      <a class="text-sm hover:text-black/70" href="#">Esqueceu a senha?</a>
    </div>
    <div class="w-full mb-4">
      <q-btn @click="goHome" label="Entrar" class="text-white !w-full bg-primary" />
    </div>
    <span class="text-sm hover:text-black/70"
      >Não tem conta ainda ?
      <a class="font-semibold cursor-pointer" @click="router.push('/login/register')"
        >Cadastre-se</a
      >
    </span>
  </form>
</template>
