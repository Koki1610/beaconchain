export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    onRequest({
      options,
    }) {
      if (isServerSide) {
        const cookiesForServerSideRequests = useRequestHeader('cookie')
        if (cookiesForServerSideRequests) {
          options.headers.append('cookie', cookiesForServerSideRequests)
        }
      }
    },
    // async onResponseError({
    //   response,
    // }) {
    //   const redirectTo = encodeURIComponent(useRoute().fullPath)
    //   if (response.statusText === 'Unauthorized') {
    //     // TODO prevent infinite loop
    //     await nuxtApp.runWithContext(() => navigateTo({
    //       name: 'login',
    //       query: {
    //         redirectTo,
    //       },
    //     }))
    //   }
    // },
  })

  return {
    provide: {
      api,
    },
  }
})
