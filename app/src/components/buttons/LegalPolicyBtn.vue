<template>
       <q-btn-dropdown :label="$t('footer.policy.label')" no-caps flat dense>
        <q-list>
          <q-item
            clickable
            v-close-popup
            :to="{ name: 'policyPage', params: { policy: 'privacy-policy' } }"
          >
            <q-item-section>
              <q-item-label>Privacy Policy</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-close-popup
            :to="{ name: 'policyPage', params: { policy: 'cookie-policy' } }"
          >
            <q-item-section>
              <q-item-label>Cookie Policy</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-close-popup
            :to="{ name: 'policyPage', params: { policy: 'terms-of-service' } }"
          >
            <q-item-section>
              <q-item-label>Terms of Service</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
</template>
