<template>
    <button class="btn-primary">{{ myFunc() }}</button>
</template>

<script setup lang="ts">
import {myFunc} from '../utils/testFunc';
</script>
