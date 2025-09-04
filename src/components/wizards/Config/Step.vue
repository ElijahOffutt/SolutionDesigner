<template>
    <v-stepper-item :value :complete>

        <template #default>
            <span style="text-transform: capitalize;">{{ text }}</span>
        </template>

        <template #icon>
            <v-icon>mdi-{{ icon }}</v-icon>
        </template>

    </v-stepper-item>
</template>

<script setup>

import { defineProps } from 'vue'

let { meta } = defineProps(['meta'])
let { value, icon, text, complete } = meta
</script>