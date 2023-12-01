<template>
  <q-btn-dropdown flat dense icon="mdi-cookie">
    <div class="row no-wrap q-pa-md">
      <div class="column">
        <div class="text-h6 q-mb-md">{{ $t("cookie.settings.label") }}</div>
        <q-toggle
          v-model="cookiePolicyAccepted"
          :label="$t('cookie.settings.cookiePolicy.label')"
        ></q-toggle>
        <q-toggle
          v-model="reqCookiesAccepted"
          :label="$t('cookie.settings.requiredCookies.label')"
        ></q-toggle>
        <q-toggle
          v-model="intTrackingAccepted"
          :label="$t('cookie.settings.internalTrackingCookies.label')"
        ></q-toggle>
        <q-toggle
          v-model="extTrackingAccepted"
          :label="$t('cookie.settings.externalTrackingCookies.label')"
        ></q-toggle>
      </div>

      <q-separator vertical inset class="q-mx-lg"></q-separator>

      <div class="column items-center">
        <div class="q-mt-xs q-mb-md">
          <q-btn
            color="primary"
            :label="$t('cookie.settings.cookiePolicy.viewLabel')"
            push
            size="md"
            no-caps=""
          ></q-btn>
        </div>

        <div class="text-weight-bold level-header q-mb-sm">
          {{ $t("cookie.settings.accessLevel.label") }}
        </div>
        <div
          :class="
            'level q-ma-xs q-py-xs full-width text-center ' +
            (userStore.signinCookiesMet
              ? '  '
              : ' bg-yellow-3 text-grey-9 text-weight-medium ')
          "
        >
          {{ $t("cookie.settings.accessLevel.visitor.label") }}
        </div>
        <div
          :class="
            'level q-ma-xs q-py-xs full-width text-center ' +
            (userStore.signinCookiesMet && ! userStore.netizenCookiesMet
              ? ' bg-green-4 text-grey-9 text-weight-medium '
              : '  ')
          "
        >
          {{ $t("cookie.settings.accessLevel.basic.label") }}
        </div>
        <div
          :class="
            'level q-ma-xs q-py-xs full-width text-center ' +
            (userStore.netizenCookiesMet
              ? ' bg-amber-6 text-grey-9 text-weight-medium '
              : '  ')
          "
        >
          {{ $t("cookie.settings.accessLevel.netizen.label") }}
        </div>

        <!-- <q-avatar size="36px">
            <q-icon name="star"></q-icon>
          </q-avatar>
          <q-avatar size="36px">
            <q-icon name="star"></q-icon>
          </q-avatar>
          <q-avatar size="36px">
            <q-icon name="star"></q-icon>
          </q-avatar> -->
      </div>
    </div>
  </q-btn-dropdown>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const {
  cookiePolicyAccepted,
  extTrackingAccepted,
  intTrackingAccepted,
  reqCookiesAccepted,
} = storeToRefs(userStore);
</script>

<style lang="scss" scoped>
.level-header {
  border-bottom-style: solid;
  border-color: grey;
  border-width: 1px;
}
.level {
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  border-radius: 1em;
}
</style>
