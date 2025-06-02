<script lang="ts" setup>
const dashboardId = encodeBase64Url('1')
const {
  data: slotVizEpochs,
  refresh: refreshSlotViz,
} = useApi(`/api/validator-dashboards/${dashboardId}/slot-viz`, {
  // transform: (response) => {
  //   console.log('🚀', response)
  //   return response
  //   // return response.data
  // },
})
const onChangeValidators = (validators: string[]) => {
  // const encodedValidators = encodeBase64Url(validators.join(','))
  // refreshOverview()
  refreshSlotViz()
  console.log('👉', validators)
}
</script>

<template>
  <DashboardIndex
    :overview="null"
    :slot-viz-epochs
    @change-validators="onChangeValidators"
  />
</template>
