<template>
    <!-- CHANGE TEXT TO FIRST SOLUTION WHEN YOU BEGIN TRACKING INITIAL STATE OF APPLICATION  -->

    <v-row>
        <v-col>
            <h1>Start building your Solution</h1>
            <span>Lets get started by answering a few questions.</span>

            <!-- start with what kind of project this is, new company, start up, new feature, stand alone app, hobbyist, demo, prototypical -->
            <!-- next with who the project is for, audience, shareholders, stake holders, product owners -->

            <v-stepper-vertical v-model="step">

                <v-stepper-vertical-item icon="mdi-speedometer-slow" subtitle="What its about and why it matters."
                    title="Ignition" value="quick">
                    <template #default>
                        <v-text-field label="One line Description" />
                        <v-textarea label="Three sentence Description (Quick Pitch)" />
                    </template>
                </v-stepper-vertical-item>

                <v-stepper-vertical-item icon="mdi-speedometer-medium" title="Cruise"
                    subtitle="Elevator Pitch | Descriptions of your solution, the problem you are soling and how you plan to do it.">
                    <template #default>
                        <v-text-field label="One line Description" />
                        <v-textarea label="Three sentence Description (Quick Pitch)" />
                    </template>
                </v-stepper-vertical-item>

                <v-stepper-vertical-item icon="mdi-speedometer" title="Overdrive"
                    subtitle="Go full throttle | Vision, Context, Scope, detail the bird's eye view and hold nothing back.">
                    <template #default>
                        <v-text-field label="One line Description" />
                        <v-textarea label="Three sentence Description (Quick Pitch)" />
                    </template>
                </v-stepper-vertical-item>

            </v-stepper-vertical>
        </v-col>
        <v-col cols="4">
            <h2 style="text-align: right;">Progress</h2>
            <!-- Progress Bar -->
            <!-- Feild review: if AI is enabled, a score wil be given to the section,  -->
        </v-col>
    </v-row>

</template>

<script setup>

let step = ref('quick')

</script>