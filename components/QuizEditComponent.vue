<script lang="ts" setup>
import { Quiz } from '@/models/Quiz'
import buildUrl from 'build-url-ts';
import { OperationChoiceList, operationIcon } from '~/types/OperationChoice'

const generateProblems = () => data.generateProblems();

const { data } = defineProps({
    data: {
        type: Quiz,
        required: true
    }
})

const fixRange = (_event: unknown) => {
    data.bottomNumberRange.fixRange();
    data.topNumberRange.fixRange();
    if (!data.invalid) {
        data.generateProblems();
    }
}

const quizPageUrl = computed(() => 
    buildUrl({ path: '/quiz-page', queryParams: data.toParams() })
)

const quizCreatePdf = computed(() => 
    buildUrl({ path: '/api/create-pdf', queryParams: data.toParams() })
)
</script>

<template>
    <v-card class="d-flex align-start pt-5">
        <v-responsive class="mx-auto" max-width="250px">
            <v-text-field
            label="Kid Name"
            v-model:model-value="data.kidName"
            ></v-text-field>
        </v-responsive>
        <v-responsive class="mx-auto" max-width="200px">
            <v-btn-toggle
            v-model="data.operationChoice"
            color="primary"
            mandatory
            >
            <v-btn
            v-for="operation in OperationChoiceList"
            :icon="operationIcon(operation)"
            :value="operation"
            @click="generateProblems"
            ></v-btn>
        </v-btn-toggle>
    </v-responsive>
    <v-responsive class="mx-auto">
        <v-text-field
        :label="data.topNumberRangeLabel"
        v-model:model-value="data.topNumberRange.range"
        @update:model-value="fixRange"
        :error="data.topNumberRange.invalid"
        />
    </v-responsive>
    <v-responsive class="mx-auto">
        <v-text-field
        label="Bottom Range"
        v-model:model-value="data.bottomNumberRange.range"
        @update:model-value="fixRange"
        :error="data.bottomNumberRange.invalid"
        />
    </v-responsive>
    <v-btn
    icon="mdi-download"
    color="primary"
    :href="quizCreatePdf"
    />
    <v-btn
    icon="mdi-launch"
    color="primary"
    :href="quizPageUrl"
    />
</v-card>
<ProblemListComponent :data="data.optionalProblemList" :name="data.kidName"/>
</template>
