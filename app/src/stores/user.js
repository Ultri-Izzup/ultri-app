import { computed } from "vue";
import { defineStore } from "pinia";
import { useQuasar } from "quasar";
import { useStorage } from "@vueuse/core";

/**
 * The User store manages user functionality and state,
 * from being an anonymous visitor, to being an authenticated member.
 */
export const useUserStore = defineStore("user", () => {

  const $q = useQuasar();

  /**
   * STATE - Store state is defined using refs.
   * These should be consumed using Pinia storeToRefs.
   * These should all be accounted for in the $reset function as well.
   */

  // Boolean signifying if the vistor was shown the cookie options.
  const cookieOptionsDisplayed = useStorage("cookieOptionsDisplayed", false);

  // Policy acceptance
  const cookiePolicyAccepted = useStorage("cookiePolicyAccepted", false);
  const privacyPolicyAccepted = useStorage("privacyPolicyAccepted", false);
  const termsOfServiceAccepted = useStorage("termsOfServiceAccepted", false);

  // Cookies acceptance
  const extTrackingAccepted = useStorage("externalTrackingAccepted", false);
  const intTrackingAccepted = useStorage("internalTrackingAccepted", false);
  const reqCookiesAccepted = useStorage("requiredCookies", false);

  /**
   * GETTERS - *Computed* functions become store getters
   */


  // Has the user granted internal tracking?
  // Internal Tracking is required to allow part in governance.
  const isNetizen = computed(() =>  {
    return signinRequirementsMet.value === true
      && intTrackingAccepted.value === true;
  });

  // Are minimum required cookies accepted?
  const signinCookiesMet = computed(() =>  {
    return cookiePolicyAccepted.value === true
      && reqCookiesAccepted.value === true;
  });

  // Are minimum required cookies accepted?
  const netizenCookiesMet = computed(() =>  {
    return signinCookiesMet.value === true
      && intTrackingAccepted.value === true;
  });

  // Are minimum required cookies and policies accepted?
  const signinRequirementsMet = computed(() =>  {
    return privacyPolicyAccepted.value === true
      && cookiePolicyAccepted.value === true
      && termsOfServiceAccepted.value === true
      && reqCookiesAccepted.value === true;
  });

  /**
   * ACTIONS - Plain functions become store actions
   */
  const $reset = () => {
    cookieOptionsDisplayed.value = false;
    cookiePolicyAccepted.value = false;
    privacyPolicyAccepted.value = false;
    termsOfServiceAccepted.value = false;
    extTrackingAccepted.value = false;
    intTrackingAccepted.value = false;
    reqCookiesAccepted.value = false;
  }

  /**
   * RETURN ONLY WHAT IS NEEDED EXTERNALLY
   */
  return {
    // STATE
    cookieOptionsDisplayed,
    cookiePolicyAccepted,
    privacyPolicyAccepted,
    termsOfServiceAccepted,
    extTrackingAccepted,
    intTrackingAccepted,
    reqCookiesAccepted,

    // GETTERS
    isNetizen,
    netizenCookiesMet,
    signinCookiesMet,
    signinRequirementsMet,


    // ACTIONS
    $reset,

  };
});
