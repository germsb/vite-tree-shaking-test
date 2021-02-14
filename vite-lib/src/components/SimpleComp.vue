<template>
    <div style="font-size: xx-large; margin-left: 20px;">{{ eeee }}</div>
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
