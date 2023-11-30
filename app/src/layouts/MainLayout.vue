<template>
  <q-layout view="hHh lpR fFf">
    <page-header></page-header>

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
    </q-drawer> -->

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <right-drawer></right-drawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <page-footer></page-footer>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useQuasar } from 'quasar'

import PageHeader from "../components/page/PageHeader.vue";
import PageFooter from "../components/page/PageFooter.vue";
import RightDrawer from "../components/page/RightDrawer.vue";

import { useUIStore } from "../stores/ui";

const $q = useQuasar()

const uiStore = useUIStore();
const { rightDrawerOpen } = storeToRefs(uiStore);

</script>
