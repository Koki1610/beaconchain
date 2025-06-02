import type { H3Event } from 'h3'

const config = useRuntimeConfig()
const headers = {
  'x-ssr-secret': config.private.ssrSecret,
}
/**
 * Executes a `get request`, while it forwards headers and cookies to our external API
 */
export const post = <T>(
  endpoint: string,
  {
    event,
    options,
  }: {
    event: H3Event,
    options?: Parameters<H3Event['$fetch']>[1],
  },
) => {
  return event.$fetch<T>(endpoint, {
    ...options,
    baseURL: config.public.apiClient,
    headers,
    method: 'post',
  })
}
