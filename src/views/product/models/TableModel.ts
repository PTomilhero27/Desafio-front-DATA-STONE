// Dados e colunas da tabela
export const columnsProduct: any = [
  {
    name: 'productName',
    align: 'left',
    label: 'Nome do Produto',
    field: 'productName',
    sortable: true
  },
  {
    name: 'clientName',
    align: 'center',
    label: 'Nome do Cliente',
    field: 'clientName',
    sortable: true
  },
  {
    name: 'clientDocument',
    label: 'Documento do Cliente',
    field: 'clientDocument',
    sortable: true
  },
  { name: 'active', label: 'Ativo', field: 'active', sortable: true },
  { name: 'action', label: 'Ações', field: 'action', sortable: false }
]

export const originalRowsProduct = [
  {
    id: 1,
    productName: 'Produto 1',
    clientName: 'Cliente A',
    clientDocument: '123.456.789-00',
    active: true,
    action: []
  },
  {
    id: 2,
    productName: 'Produto 2',
    clientName: 'Cliente B',
    clientDocument: '987.654.321-00',
    active: false,
    action: []
  },
  {
    id: 3,
    productName: 'Produto 3',
    clientName: 'Cliente C',
    clientDocument: '111.222.333-44',
    active: true,
    action: []
  }
]