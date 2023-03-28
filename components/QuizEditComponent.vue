<template>
    <v-card>
        <v-row>
            <v-col cols="12" sm="12">
                <v-text-field
                v-model:model-value="data.name"
                />
                <v-autocomplete
                    :items="numberRangeChoices"
                    label="Bottom range"
                    v-model:model-value="data.bottomNumberRangeChoice"
                    >
                </v-autocomplete>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts" setup>
import { Quiz } from '@/models/Quiz'
import { NumberRange } from '~~/types/NumberRange'

const numberRangeChoices: string[] = NumberRange.options.map((range) => range.name)

const { data } = defineProps({
    data: {
        type: Quiz,
        required: true
    }
})
</script>
