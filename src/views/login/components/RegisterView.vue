<script setup lang="ts">
import { useRouter } from 'vue-router'
import { QInput, QBtn } from 'quasar'
import { object, string } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'

const cadastroSchema = object({
  nome: string().nonempty('O nome é obrigatório').min(1, 'Por favor, insira o nome completo'),
  documento: string()
    .nonempty('O documento é obrigatório')
    .length(11, 'O documento deve ter exatamente 11 caracteres'),
  telefone: string()
    .nonempty('O telefone é obrigatório')
    .length(11, 'O telefone deve ter exatamente 11 caracteres'),
  email: string().nonempty('O e-mail é obrigatório').email('Must be a valid email'),
  senha: string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
})

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(cadastroSchema)
})

const { value: nome }: string = useField('nome')
const { value: documento } = useField('documento')
const { value: telefone } = useField('telefone')
const { value: email } = useField('email')
const { value: senha } = useField('senha')
const router = useRouter()

const onSubmit = handleSubmit(() => {
  router.push('/')
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full max-w-xs mx-auto my-8">
    <div class="text-center mb-8">
      <p class="font-bold text-2xl tracking-widest">Cadastre-se</p>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="nome" label="Nome Completo" />
      <span class="text-xs text-red-500">{{ errors.nome }}</span>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="documento" label="Documento" />
      <span class="text-xs text-red-500">{{ errors.documento }}</span>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="telefone" label="Telefone" />
      <span class="text-xs text-red-500">{{ errors.telefone }}</span>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="email" label="E-mail" />
      <span class="text-xs text-red-500">{{ errors.email }}</span>
    </div>
    <div class="mb-6">
      <q-input outlined type="password" v-model="senha" label="Senha" />
      <span class="text-xs text-red-500">{{ errors.senha }}</span>
    </div>
    <div class="flex flex-col items-stretch mt-4">
      <q-btn label="Cadastrar" type="submit" class="text-white bg-primary" />
      <span @click="router.push('/login')" class="mt-4 text-sm"
        >Já tem conta ? <a class="font-semibold cursor-pointer">Login</a></span
      >
    </div>
  </form>
</template>
