import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { useQuasar } from "quasar";
import { useStorage } from "@vueuse/core";

/**
 * The UI store manages UI functionality and state.
 */
export const useUIStore = defineStore("ui", () => {

  const $q = useQuasar();

  // STATE - Store state is defined refs
  const darkMode = useStorage("darkMode", null);
  const isLoading = ref(false);
  const rightDrawerOpen = useStorage("rightDrawerOpen", false);


  // GETTERS - Computed functions become store getters


  // ACTIONS - Plain functions become store actions
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    $q.dark.set(darkMode.value);
  }

  const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
  }

  // Set darkMode from store/localStorage
  watch(
    () => darkMode,
    () => {
      if (darkMode) {
        $q.dark.set(true);
      } else {
        $q.dark.set(false);
      }
    },
    { immediate: true }
  );

  // Default loading spinner to show during async operations
  watch(isLoading, (newVal, oldVal) => {
    if(newVal) {
      $q.loading.show({
        delay: 400, // ms
        spinner: 'grid',
        spinnerColor: 'yellow',
        spinnerSize: 140,
        backgroundColor: 'purple',
        message: 'Some important process is in progress. Hang on...',
        messageColor: 'black'
      })
    } else {
      $q.loading.hide()
    }
  }, {immediate: true})

  /**
   * RETURN ONLY WHAT IS NEEDED EXTERNALLY
   */
  return {
    // STATE
    darkMode,
    isLoading,
    rightDrawerOpen,


    // GETTERS

    // ACTIONS
    toggleDarkMode,
    toggleRightDrawer
  };
});
