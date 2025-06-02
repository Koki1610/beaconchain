export const useDashboard = () => {
  const route = useRoute()
  const dashboardId = computed(() => route.params.id ?? undefined)
  const isSharedDashboard = computed(() => dashboardId.value?.startsWith('v-'))
  // const isPrivateDashboard = computed(() => {
  //   if(!dashboardId.value.length)
  // })
  return {
    dashboardId,
    // isPrivateDashboard,
    isSharedDashboard,
  }
}
