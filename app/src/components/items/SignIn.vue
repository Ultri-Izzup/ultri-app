<template>
  <q-item clickable v-ripple @click="uiStore.toggleDarkMode()">
    <q-item-section avatar>
      <q-icon name="mdi-login"></q-icon>
    </q-item-section>
    <q-item-section>
      {{ $t('auth.signInSignUp') }}
    </q-item-section>
  </q-item>
</template>

<script setup>

</script>
