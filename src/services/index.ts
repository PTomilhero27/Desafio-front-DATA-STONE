import type { GetAllProps, CreateProps, EditProps } from './models/services'
import { apiProdLink } from '@/lib/ky'

export const prodLinkService = {
  async getAll<T>({ url, params }: GetAllProps): Promise<T> {
    const response = await apiProdLink.get(url, {
      searchParams: {
        ...params
      }
    })

    const data: T = await response.json()
    return data
  },

  async create<T>({ url, json }: CreateProps): Promise<T> {
    const response = await apiProdLink.post(url, {
      json
    })

    const data: T = await response.json()

    return data
  },

  async edit<T>({ url, json, id }: EditProps): Promise<T> {
    const response = await apiProdLink.patch(`${url}/${id}`, {
      json
    })

    const data: T = await response.json()
    return data
  }
}
