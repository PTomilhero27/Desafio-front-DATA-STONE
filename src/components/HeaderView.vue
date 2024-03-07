<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

function logout() {
  userStore.clearUser()
  router.push('/login')
}
</script>

<template>
  <header class="bg-primary h-20 px-4 lg:px-[100px] flex items-center justify-between">
    <img src="../assets/icons/Logo.svg" alt="Logo do ClientLink" class="h-7" />

    <div class="flex items-center gap-2 md:gap-4">
      <a
        @click="router.push('/')"
        class="text-white font-sans max-sm:hidden text-lg md:text-xl ml-2 cursor-pointer"
      >
        Home
      </a>
      <a
        @click="router.push('/product')"
        class="text-white font-sans max-sm:hidden text-lg md:text-xl ml-2 cursor-pointer"
      >
        Produtos
      </a>
      <div>
        <q-avatar
          class="cursor-pointer"
          size="xl"
          color="secondary"
          text-color="white"
          icon="person"
          @click="showDropdown = !showDropdown"
        >
          <q-menu class="w-20" v-model="showDropdown">
            <q-list>
              <q-item clickable v-close-popup @click="router.push('/perfil')">
                <q-item-section>Perfil</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="logout">
                <q-item-section>Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </div>
    </div>
  </header>
</template>
