import ky from 'ky'
import { env } from '@/constants/env'

export const apiProdLink = ky.create({
  prefixUrl: env.API_PROD_LINK
})
