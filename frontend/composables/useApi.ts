import type { MultiWatchSources } from 'vue'

type UseApiOptions = {
  immediate?: boolean,
  lazy?: boolean,
  // key?: Key,
  watch?: MultiWatchSources[],
}
type UseFetch = typeof useFetch

export const useApi = function <T extends LooseAutocomplete<ServerUrl>>(
  url: T,
  options?: UseApiOptions,
) {
  return useFetch(url, {
    key: url,
    ...options,
    $fetch: useNuxtApp().$api,
  })
} as UseFetch
// type UseAsyncData = typeof useAsyncData

// type UseApiOptions = {
//   immediate?: boolean,
//   // lazy?: boolean,
//   // key?: Key,
//   watch?: ((() => unknown) | ComputedRef<unknown> | object | Ref<unknown, any>)[],
// }

// export const useApi = function<T extends LooseAutocomplete<ServerUrl>> (
//   url: T,
//   options: UseApiOptions = {},
// ) {
//   const { $api } = useNuxtApp()
//   const handler = () => $api(url)
//   // if (!key) {
//   //   return useAsyncData(handler, options)
//   // }
//   // return useAsyncData(key, handler, options)
//   const key = url
//   return useAsyncData(key, handler, {
//     lazy: true,
//     watch: [ () => url ],
//     ...options,
//   })
// }
