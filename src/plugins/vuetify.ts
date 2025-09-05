/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components (Vuetify Labs: "Risk, Experimental, Subject to Change")
import { VStepperVertical, VStepperVerticalItem, VStepperVerticalActions } from 'vuetify/labs/VStepperVertical'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  components: {
    VStepperVertical,
    VStepperVerticalItem,
    VStepperVerticalActions
  }
})
