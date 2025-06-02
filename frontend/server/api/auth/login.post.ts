export default defineEventHandler(async (event) => {
  // `set session cookie`
  const {
    headers,
  } = await fetchRaw('/login', {
    body: {
      email: 'marcel.massmann@bitfly.at',
      password: 'HrQJsENtqoxHthL0nVnr9HAZ',
    },
    method: 'POST',
  })
  const cookie = headers.getSetCookie()
  appendHeader(event, 'set-cookie', cookie)
  return
})
