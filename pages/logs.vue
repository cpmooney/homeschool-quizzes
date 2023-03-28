<script setup lang='ts'>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { JSONDataType } from 'vue-json-pretty/types/utils';

const logData: Ref<JSONDataType> = ref({})

onBeforeMount(async () => {
    const { data } = await useFetch('/api/logs');
    if (data.value) {
        logData.value = JSON.parse(data.value);
    }
})

</script>

<template>
    <div>
        <VueJsonPretty :data='logData' />
    </div>
</template>
