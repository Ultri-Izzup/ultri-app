<template>
  <q-header reveal bordered class="bg-primary text-white">
    <q-toolbar>
      <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

      <q-toolbar-title>
        <span class="text-h4 text-italic text-weight-bold">{{
          $t("site.name")
        }}</span>
      </q-toolbar-title>

      <q-btn @click="uiStore.toggleRightDrawer" :color="uiStore.rightDrawerOpen ? 'grey-5' : ''" dense flat round icon="mdi-account" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUIStore } from "../../stores/ui";

const uiStore = useUIStore();
const { rightDrawerOpen } = storeToRefs(uiStore);
</script>
