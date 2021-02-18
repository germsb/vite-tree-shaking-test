<template>
    <div style="font-size: xx-large; margin-left: 20px;">{{ llll }}</div>
</template>
<script lang="ts">
import {ref} from 'vue';
export default {
    name: 'SimpleComp2',
    setup() {
        const llll = ref('hello simple comp 2');
        return {llll};
    },
};
</script>
