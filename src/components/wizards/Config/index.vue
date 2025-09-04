<template>

    <v-stepper v-model="progress">

        <v-stepper-header>

            <template v-for="(item, index) in items">

                <v-divider v-if="!(index === 0)" />

                <Step :meta="item.meta" />

            </template>

        </v-stepper-header>

        <v-stepper-window>

            <v-stepper-window-item v-for="item in items" :value="item.meta.value">
                <component :is="item.item" />
            </v-stepper-window-item>

        </v-stepper-window>

        <v-stepper-actions @click:prev="prev(progress)" @click:next="next(progress)" />

    </v-stepper>

</template>

<script setup>

// IMPORT CONFIG STATE
import { useConfigState } from './ConfigState';

// CACHE STATE OBJECT IN COMPONENT
let ConfigState = useConfigState()

// PULL PROGRESS FROM CONFIG STATE AND CONVERT TO REACTIVE REFERENCE 
let { progress } = storeToRefs(ConfigState)

// IMPORT HEADER STEP QOL COMPONENT
import Step from './Step.vue';

// IMPORT WALK THROUGH COMPONENTS
import Welcome from './Welcome.vue';

let items = shallowRef([
    {
        meta: {
            value: 'welcome',
            text: 'Getting Started',
            icon: 'flag-checkered',
            complete: false
        },
        item: Welcome,
    },
    {
        meta: {
            value: 'configure',
            text: 'Configure AI',
            icon: 'robot',
            complete: false
        },
        item: Welcome,
    }
])

let currentIndex = computed(() => items.value.findIndex(item => item.meta.value === progress.value))
let stepLength = computed(() => items.value.length)
let previousComplete = computed(() => items.value[currentIndex - 2].meta.complete)

let next = (step) => {

    if ((currentIndex.value - 1) != stepLength.value) {
        progress.value = items.value[currentIndex.value + 1].meta.value
    }

}

let prev = (step) => {

    if (currentIndex.value != 0) { progress.value = items.value[currentIndex.value - 1].meta.value }


}


</script>