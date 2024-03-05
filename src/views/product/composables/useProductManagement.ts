// composables/useProductManagement.ts
import { ref } from 'vue'

export function useProductManagement() {
  const isOpen = ref(false)
  const openForm = ref(false)
  const edit = ref({})

  function cancelDelete() {
    console.log('cancelou')
    isOpen.value = false
  }

  function deleteProduct() {
    console.log('deletou')
    isOpen.value = false
  }

  const editSelected = (row: any) => {
    edit.value = row
    openForm.value = true
  }

  const cancelForm = () => {
    edit.value = {}
    openForm.value = false
  }

  const handleDelete = () => (isOpen.value = true)

  return { isOpen, openForm, edit, cancelDelete, deleteProduct, editSelected, cancelForm, handleDelete }
}
