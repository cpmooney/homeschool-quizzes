<script lang="ts" setup>
import { Problem } from '~~/models/Problem';

const { data } = defineProps({
    data: {
        type: Problem,
        required: true
    }
})
</script>

<template>
    <div>
        <div height="230px" min-width="100px" class="problem-card" :width="data.cardWidth">
            <div class="d-flex justify-end">
                <p> {{ data.topNumber }} </p>
            </div>
            <div class="d-flex justify-end">
                <p class="operation">
                    <v-icon :icon="data.operationIcon" size="30"></v-icon>
                </p>
                <p> {{ data.bottomNumber }} </p>
            </div>
            <v-divider :thickness="3" class="border-opacity-100" color="black"></v-divider>
        </div>
    </div>
</template>

<style scoped >
p {
    font-size: 28pt !important;
}

.problem-card {
    padding: 5px 20px 60px 20px
}

.operation {
    padding-right: 10px;
}
</style>
 