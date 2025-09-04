import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
// NOTE: Pin a has no "Mutations"

export const useConfigState = defineStore('ConfigState', () => {

    // DEFAULT STARTING VALUE FOR CONFIG WIZARD
    let progress = useLocalStorage('ConfigProgress', 'welcome')

    return {
        // REFS => STATE
        progress,
        // COMPUTED => GETTERS

        // FUNCTIONS => ACTIONS
    }
})