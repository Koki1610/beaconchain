<script setup lang="ts">
// const dashboardId = ref(25)
// const { $api } = useNuxtApp()
const {
  data,
  error,
  refresh,
  status,
// } = useFetch('/api/latest-state', {
// } = useApi('/api/latest-state', {
// } = useApi('/api/validator-dashboards/25/slot-viz', {
} = useApi('/api/validator-dashboards', {
  // key: 'latestState',
// } = useAsyncData(() => $api('/api/validator-dashboards/:dashboardId/consensus-layer-deposits'), {
// } = useApi(`/api/validator-dashboards/${dashboardId.value}/consensus-layer-deposits`, {
// } = useFetch(`/api/validator-dashboards/${dashboardId.value}/consensus-layer-deposits`, {
// } = useFetch('/api/auth/login', {
  // method: 'POST',
  // } = useApi('/api/test2', {
  // transform: (response) => {
  //   return response.data
  // },
})

// const response = $api('/api/validator-dashboards/:dashboardId/consensus-layer-deposits')
// const response = await $api('/api/latest-state')
// const response = await $api({})

// const requestFetch = useRequestFetch()
// const {
//   data,
//   error,
//   refresh,
//   status,
// } = await useAsyncData(() => requestFetch('/api/validator-dashboards/25/consensus-layer-deposits'))
</script>

<template>
  <div>
    Page: test
    <NuxtLayout>
      <pre>
        {{ $route.params }}
      </pre>
      <div>
        <button @click="refresh()">
          refetch
        </button>
      </div>
      <div v-if="status === 'pending'">
        Loading...
      </div>
      <pre v-else>
        {{ data }}
        <!-- {{ useApi('/latest_state').data }} -->
          error: {{ error }}
      </pre>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
