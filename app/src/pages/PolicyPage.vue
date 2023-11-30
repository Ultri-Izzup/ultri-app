<template>
  <q-page class="flex flex-center">
    <component :is="policies[route.params.policy]"></component>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import CookiePolicy from "../components/legal/CookiePolicy.vue";
import PrivacyPolicy from "../components/legal/PrivacyPolicy.vue";
import TermsOfService from "../components/legal/TermsOfService.vue";

const route = useRoute();

const policies = {
  "cookie-policy": CookiePolicy,
  "privacy-policy": PrivacyPolicy,
  "terms-of-service": TermsOfService,
}

</script>
