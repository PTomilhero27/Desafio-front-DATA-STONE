import { z } from 'zod'

export const env = z
  .object({
    API_PROD_LINK: z.string().url()
  })
  .parse({
    API_PROD_LINK: import.meta.env.VITE_API_PROD_LINK
  })
