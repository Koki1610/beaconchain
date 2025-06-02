import type { GetValidatorDashboardSlotVizResponse } from '~/types/api/slot_viz'

// export default defineEventHandler((event) => {
//   const dashboardId = getRouterParam(event, 'dashboardId')
//   if (dashboardId === undefined) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Missing dashboardId',
//     })
//   }

//   const { group_ids } = getQuery(event)

//   return get<GetValidatorDashboardSlotVizResponse>(
//     event,
//     `/validator-dashboards/${dashboardId}/slot-viz`,
//     { query: { group_ids } },
//   )
// })
export default defineEventHandler(async (event) => {
  const dashboardId = getRouterParam(event, 'dashboardId')
  // console.log('dashboardId', dashboardId)
  if (dashboardId === '') {
    // throw Error('Missing dashboardId')
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing dashboardId',
    })
  }

  const { group_ids } = getQuery(event)
  const { data } = await get<GetValidatorDashboardSlotVizResponse>(
    event,
    `/validator-dashboards/${dashboardId}/slot-viz`,
    { query: { group_ids } },
  )
  return data
})
