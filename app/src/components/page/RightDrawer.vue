<template>
  <div>
    <q-list bordered separator>

      <!-- DARKMODE -->
      <toggle-dark-mode></toggle-dark-mode>

      <!-- SIGN IN / SIGN OUT -->
      <sign-in v-if="! userStore.signedIn"></sign-in>
      <sign-out v-else></sign-out>

      <!-- FEDIVERSE DASHBOARD -->
      <fediverse-dashboard></fediverse-dashboard>

      <!-- CANAVA DASHBOARD -->
      <canava-dashboard></canava-dashboard>

      <!-- WORKSPACES -->
      <workspace-dashboard></workspace-dashboard>

    </q-list>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import ToggleDarkMode from "../items/ToggleDarkMode.vue";
import SignIn from "../items/SignIn.vue";
import SignOut from "../items/SignOut.vue";
import CanavaDashboard from "../items/CanavaDashboard.vue";
import FediverseDashboard from "../items/FediverseDashboard.vue";
import WorkspaceDashboard from "../items/WorkspaceDashboard.vue";

import { useUserStore } from "../../stores/user.js";

const userStore = useUserStore();
</script>
