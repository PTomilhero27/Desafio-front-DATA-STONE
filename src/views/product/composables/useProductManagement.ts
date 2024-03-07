// composables/useProductManagement.ts
import { useUserStore } from '@/stores/user'
import { onMounted, ref, watch } from 'vue'

export function useProductManagement() {
  const isOpen = ref(false)
  const openForm = ref(false)
  const edit = ref({})
  const userStore = useUserStore()
  const userProducts: any = ref([])

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

  function loadUserProducts() {
    // Verifica se o usuário está logado e tem produtos
    if (userStore.userData?.products) {
      userProducts.value = userStore.userData.products.map((product) => ({
        id: product.id,
        productName: product.name,
        clientName: userStore.userData?.name,
        clientDocument: userStore.userData?.document,
        active: product.isActive,
        action: []
      }))
    } else {
      userProducts.value = []
    }
  }

  onMounted(loadUserProducts)

  watch(
    () => userStore.userData,
    (newUserData) => {
      loadUserProducts()
    },
    {
      deep: true
    }
  )

  return {
    isOpen,
    openForm,
    edit,
    userProducts,
    cancelDelete,
    deleteProduct,
    editSelected,
    cancelForm,
    handleDelete,
    loadUserProducts
  }
}
