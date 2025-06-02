import type {
  InternalApi,
  NitroFetchRequest,
} from 'nitropack'

export type ServerUrl = Extract<Exclude<NitroFetchRequest, object>, `/api/${string}`>

type Response<T extends ServerUrl> = InternalApi[T] extends { default: infer R }
  ? R
  :
    | (InternalApi[T] extends { get: infer Q }
      ? Q : never)
    | (InternalApi[T] extends { patch: infer Q }
      ? Q : never)
    | (InternalApi[T] extends { post: infer Q }
      ? Q : never)
    | (InternalApi[T] extends { put: infer Q }
      ? Q : never)
/**
     * Create a Key in {@link useFetchedData} first and map the ResponseType
     * (from our backend route) as this can not be inferred automatically via nuxt
     * at the moment 😪
     *
     * Might be solved in nuxt 4 (via useFetch factory function)
*/
// export type Key = keyof Response

// type Response = {
//   'latestState': InternalApi['/api/latest-state']['default'],
//   'users/:id': InternalApi['/api/users/me']['default'],
//   'users/me': InternalApi['/api/users/me']['default'],
// }

export const useFetchedData = <T extends ServerUrl>(key: T) => {
  const { data } = useNuxtData <Response<T>>(key)
  return data
}
