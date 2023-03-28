<template>
    <div>
      <QuizEditComponent :data='quiz'>
      </QuizEditComponent>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Quiz } from '~/models/Quiz';
  import QuizEditComponent from '~/components/QuizEditComponent.vue';
  
  const quiz = reactive<Quiz>(new Quiz()) as Quiz;
  </script>
  