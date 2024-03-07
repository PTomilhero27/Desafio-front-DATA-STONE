import { prodLinkService } from './index'
import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseMutationReturnType,
  type UseQueryReturnType
} from '@tanstack/vue-query'
import type { GetAllProps, CreateProps } from './models/services'

export const useGetAll = <T>({ url, params }: GetAllProps): UseQueryReturnType<T, Error> => {
  return useQuery<T>({
    queryKey: [url, params],
    queryFn: async () => {
      const response: T = await prodLinkService.getAll({
        url,
        params
      })
      return response
    },
    refetchOnWindowFocus: false
  })
}

export const useCreate = <T>({ url }: CreateProps): any => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ json }: any) => prodLinkService.create({ url, json }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] })
    }
  })
}
