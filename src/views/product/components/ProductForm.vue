<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { QCard, QCardSection, QForm, QInput, QToggle, QBtn } from 'quasar'

const props = defineProps({
  isOpen: Boolean,
  onCancel: Function,
  edit: {
    type: Object,
    required: false,
    default: () => ({})
  }
})

const initialValueForm = {
  name: '',
  active: false
}

const product = ref({ ...initialValueForm })

// Inicializa o formulário com os dados de edit quando eles existem
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
  console.log('Produto a ser cadastrado:', props.edit)
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
