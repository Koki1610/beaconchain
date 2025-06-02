import type { InternalGetUserInfoResponse } from '~/types/api/user'

export default defineEventHandler(async (event) => {
  const hasSessionCookie = getCookie(event, 'session_id')
  if (!hasSessionCookie) return null
  await tryCatch(get<InternalGetUserInfoResponse>('/users/me', { event }))
  // try {
  //   const { data } = await
  //   return data
  // }
  // catch (error) {
  //   if (!(error instanceof FetchError)) {
  //     logError('Error is of unexpected type:', { error })
  //     throw error
  //   }
  //   console.log('Error fetching user info:', typeof error, error)
  // }
})
