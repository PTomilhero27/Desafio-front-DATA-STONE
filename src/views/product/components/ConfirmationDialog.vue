<script setup lang="ts">
import { defineProps } from 'vue'
import { QDialog, QCard, QCardSection, QAvatar, QCardActions, QBtn } from 'quasar'

const props = defineProps({
  isOpen: Boolean,
  onConfirm: Function,
  onCancel: Function
})

const onConfirm = () => {
  if (props.onConfirm) {
    props.onConfirm()
  }
}

const onCancel = () => {
  if (props.onCancel) {
    props.onCancel()
  }
}
</script>

<template>
  <q-dialog :model-value="props.isOpen" @hide="onCancel">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="report_problem" color="amber" text-color="white" />
        <span class="q-ml-sm">Tem certeza que deseja excluir este produto?</span>
      </q-card-section>

      <q-card-actions>
        <q-btn id="cancel" flat label="Cancelar" color="green" v-close-popup @click="onCancel" />
        <q-btn id="confirm" flat label="Confirmar" color="red" v-close-popup @click="onConfirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
