<script setup lang="ts">
import { useRouter } from 'vue-router'
import { QInput, QBtn, Notify } from 'quasar'
import { object, string } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'
import { useCreate } from '../../../services/query'
import type { User } from '../models/create-user'

const { mutate } = useCreate<User>({ url: 'clients' })

const cadastroSchema = object({
  name: string().nonempty('O nome é obrigatório').min(1, 'Por favor, insira o nome completo'),
  document: string()
    .nonempty('O documento é obrigatório')
    .length(11, 'O documento deve ter exatamente 11 caracteres'),
  phone: string()
    .nonempty('O telefone é obrigatório')
    .length(11, 'O telefone deve ter exatamente 11 caracteres'),
  email: string().nonempty('O e-mail é obrigatório').email('Deverá ser um email valido'),
  password: string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
})

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(cadastroSchema)
})

const { value: name } = useField('name')
const { value: document } = useField('document')
const { value: phone } = useField('phone')
const { value: email } = useField('email')
const { value: password } = useField('password')
const router = useRouter()

const onSubmit = handleSubmit((values: User) => {
  mutate(
    { json: values },
    {
      onSuccess: () => {
        router.push('/login')
        Notify.create({
          type: 'positive',
          message: 'Usuario cadastrado com sucesso!'
        })
      },
      onError: (error: any) => {
        if (error.response) {
          error.response.json().then((erroBody: any) => {
            let currentError = erroBody.message

            Notify.create({
              type: 'negative',
              message: currentError
            })
          })
        } else {
          Notify.create({
            type: 'negative',
            message: 'Ocorreu um erro inesperado.'
          })
        }
      }
    }
  )
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full max-w-xs mx-auto my-8">
    <div class="text-center mb-8">
      <p class="font-bold text-2xl tracking-widest">Cadastre-se</p>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="name" label="Nome Completo" />
      <span class="text-xs text-red-500">{{ errors.name }}</span>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="document" label="Documento" />
      <span class="text-xs text-red-500">{{ errors.document }}</span>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="phone" label="Telefone" />
      <span class="text-xs text-red-500">{{ errors.phone }}</span>
    </div>
    <div class="mb-4">
      <q-input outlined v-model="email" label="E-mail" />
      <span class="text-xs text-red-500">{{ errors.email }}</span>
    </div>
    <div class="mb-6">
      <q-input outlined type="password" v-model="password" label="Senha" />
      <span class="text-xs text-red-500">{{ errors.password }}</span>
    </div>
    <div class="flex flex-col items-stretch mt-4">
      <q-btn label="Cadastrar" type="submit" class="text-white bg-primary" />
      <span @click="router.push('/login')" class="mt-4 text-sm"
        >Já tem conta ? <a class="font-semibold cursor-pointer">Login</a></span
      >
    </div>
  </form>
</template>
