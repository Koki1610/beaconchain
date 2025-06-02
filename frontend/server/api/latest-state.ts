import type { InternalGetLatestStateResponse } from '~/types/api/latest_state'

export default defineEventHandler(async (event) => {
  const { data } = await get<InternalGetLatestStateResponse>(event, '/latest-state')
  return data
})
