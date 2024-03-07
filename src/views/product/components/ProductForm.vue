<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { QCard, QCardSection, QForm, QInput, QToggle, QBtn, Notify } from 'quasar'
import { useCreate, useEdit } from '@/services/query'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  isOpen: Boolean,
  onCancel: Function,
  edit: {
    type: Object,
    required: false,
    default: () => ({})
  }
})

const { mutate } = useCreate({ url: 'products' })
const { mutate: mutateEdit } = useEdit({ url: 'products' })
const userStore = useUserStore()

const initialValueForm = {
  name: '',
  active: false
}

const product = ref({ ...initialValueForm })

watchEffect(() => {
  if (props.edit && props.edit.id) {
    console.log(props.edit)
    product.value = {
      name: props.edit.productName || '',
      active: props.edit.active || false
    }
  } else {
    product.value = { ...initialValueForm }
  }
})

const onCancel = () => {
  if (props.onCancel) {
    props.onCancel()
  }
  product.value = { ...initialValueForm }
}

const onSubmit = () => {
  const json = {
    name: product.value.name,
    isActive: product.value.active,
    clientId: userStore.userData?.id
  }

  if (props.edit && props.edit.id) {
    mutateEdit(
      { json, id: props.edit.id },
      {
        onSuccess: (response: any) => {
          Notify.create({
            type: 'positive',
            message: 'Produto cadastrado com sucesso!'
          })
          userStore.setUser(response)
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
  } else {
    mutate(
      { json },
      {
        onSuccess: (response: any) => {
          Notify.create({
            type: 'positive',
            message: 'Produto cadastrado com sucesso!'
          })
          userStore.setUser(response)
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
  }
  onCancel()
}
</script>

<template>
  <q-dialog :model-value="props.isOpen" @hide="onCancel">
    <q-card class="my-5 mx-3 shadow-lg w-full max-w-md">
      <q-card-section class="q-pa-md">
        <div class="text-h6 text-center mb-4">Cadastro de Produto</div>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input filled v-model="product.name" label="Nome" class="mb-2" />
          <div class="mb-2">
            <q-toggle v-model="product.active" label="Ativo" color="green" />
          </div>
          <q-btn :label="props.edit.id ? 'editar' : 'Cadastrar'" type="submit" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
