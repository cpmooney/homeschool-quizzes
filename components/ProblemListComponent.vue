<script lang="ts" setup>
import { Problem } from '~~/models/Problem'

const { data } = defineProps({
    data: {
        type: Optional<Problem[][]>,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="d-flex flex-wrap quiz-page">
        <div class="name-field">
            {{ name }}
        </div>
        <v-divider :thickness="3" class="border-opacity-100 name-line" color="black"></v-divider>
        <div class="problem-div-row" v-for="(problemRow, index) in data.value" :key="index">
            <div v-for="(problem, index) in problemRow" :key="index">
                <ProblemComponent :data="problem" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.name-line {
    padding: 10px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.name-field {
    font-size: 28pt !important;
    width: 100%;
    /* Full width of the viewport */
    padding-left: 50px;
    padding-bottom: 10px;
}

.quiz-page {
    padding: 100px 50px 50px 50px;
    width: 100%;
    /* Full width of the viewport */
    display: flex;
    /* Use flexbox */
    justify-content: center;
    /* Horizontally center the child divs */
    align-items: center;
    /* Vertically center the child divs */
}

.problem-div-col {
    width: 100%;
}

.problem-div-row {
    display: flex;
    /* Use flexbox */
    justify-content: center;
    /* Horizontally center the child divs */
    align-items: center;
    /* Vertically center the child divs */
}

.horizontal-line {
    /* Set the height, color, and position of the line */
    height: 1px;
    background-color: black;
    position: relative;
}

.horizontal-line::before {
    /* Create a pseudo-element that represents the line */
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: inherit;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
