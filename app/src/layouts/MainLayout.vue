<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <span class="text-h4 text-italic text-weight-bold">{{
            $t("site.name")
          }}</span>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>

    </q-drawer> -->

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <page-footer></page-footer>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { useQuasar } from 'quasar'

import PageFooter from "../components/page/PageFooter.vue";

import { useUIStore } from "../stores/ui";

const $q = useQuasar()

const uiStore = useUIStore();
const { isLoading } = storeToRefs(uiStore);

watch(isLoading, (newVal, oldVal) => {
  if(newVal) {
    $q.loading.show({
      delay: 400 // ms
    })
  } else {
    $q.loading.hide()
  }
}, {immediate: true})




const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

</script>
