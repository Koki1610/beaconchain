<script setup lang="ts"></script>

<template>
  <BcLayout>
    <template #header>
      <BcNavigation />
    </template>
    <template #banner>
      <slot name="banner" />
    </template>
    <slot />
  </BcLayout>
</template>

<style scoped></style>
