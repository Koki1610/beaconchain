import type { GetValidatorDashboardResponse } from '~/types/api/validator_dashboard'

export default defineEventHandler(async (event) => {
  const dashboardId = getRouterParam(event, 'dashboardId')
  if (dashboardId === '') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing dashboardId',
    })
  }

  const { data } = await get<GetValidatorDashboardResponse>(
    event,
    `/validator-dashboards/${dashboardId}`,
  )
  // const promise = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(data)
  //   }, 3000) // Simulate a delay of 1 second
  // })
  // await promise

  return data
})
