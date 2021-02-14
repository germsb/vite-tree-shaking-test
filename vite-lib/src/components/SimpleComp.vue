<template>
    <div>{{ eeee }}</div>
</template>
<script lang="ts">
import {ref} from 'vue';
export default {
    name: 'SimpleComp',
    setup() {
        const eeee = ref('hello');
        return {eeee};
    },
};
</script>
