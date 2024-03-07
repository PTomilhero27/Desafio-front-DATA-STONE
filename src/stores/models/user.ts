export interface Product {
  id: number
  name: string
  isActive: boolean
  clientId: number
}

export interface User {
  id: number
  name: string
  document: string
  phone: string
  email: string
  isActive: boolean
  products: Product[]
}
