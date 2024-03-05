<script setup lang="ts">
import { useProductManagement } from './composables/useProductManagement'
import ProductForm from './components/ProductForm.vue'
import ConfirmationDialog from './components/ConfirmationDialog.vue'

const {
  isOpen,
  openForm,
  edit,
  cancelDelete,
  deleteProduct,
  editSelected,
  cancelForm,
  handleDelete
} = useProductManagement()

import { QInput, QTable, QTd } from 'quasar'
import { columnsProduct, originalRowsProduct } from './models/TableModel'
import { ref } from 'vue'
const search = ref('')
const rows = ref(originalRowsProduct)
</script>

<template>
  <section class="p-4">
    <ConfirmationDialog :isOpen="isOpen" :onConfirm="deleteProduct" :onCancel="cancelDelete" />
    <ProductForm :isOpen="openForm" :onCancel="cancelForm" :edit="edit" />

    <div class="flex justify-between mb-4">
      <q-input
        v-model="search"
        :outlined="true"
        color="black"
        dense
        type="search"
        placeholder="Pesquisar..."
        class="q-mr-md"
      >
        <template v-slot:append>
          <q-icon v-if="search === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
        </template>
      </q-input>

      <q-btn label="Criar Produto" color="secondary" class="h-10" @click="openForm = true" />
    </div>

    <!-- Tabela de informações -->
    <q-table
      row-key="id"
      :rows="rows"
      :columns="columnsProduct"
      :filter="search"
      binary-state-sort
      flat
      bordered
      class="!shadow-2xl mt-10"
    >
      <template v-slot:body-cell-active="props">
        <q-td :props="props">
          {{ props.row.active ? 'Sim' : 'Não' }}
        </q-td>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props" class="text-right">
          <q-btn flat dense round icon="more_vert">
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup @click="editSelected(props.row)">
                  <q-item-section>Editar</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="handleDelete">
                  <q-item-section>Excluir</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </section>
</template>
