<script lang="ts" setup>
import { Quiz } from '@/models/Quiz'

const quiz = Quiz.fromParams(useRoute().query)

onMounted(() => setTimeout(() => window.print(), 1000))
</script>

<template>
    <ProblemListComponent :data="quiz.optionalProblemList" :name="quiz.kidName" />
</template>

<style type="text/css" media="print">
@page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
}
</style>
