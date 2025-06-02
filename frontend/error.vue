<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

onBeforeUnmount(() => {
  clearError()
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="error-page">
        <template v-if="error?.statusCode === 404">
          <h1>{{ $t('error.404.title') }} ({{ error?.statusCode }})</h1>
          <p>{{ $t('error.404.description') }}</p>
          <pre>{{ $route.path }}</pre>
        </template>
        <template v-else>
          <h1>{{ $t('error.we_are_sorry_error_occurred') }} ({{ error?.statusCode }})</h1>
        </template>
        <section>
          <BcLink
            to="/"
            class="link"
          >
            {{ $t('navigation.back_to_home') }}
          </BcLink>
        </section>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
