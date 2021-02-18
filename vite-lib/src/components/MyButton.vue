<template>
    <button class="btn-primary">{{ myFunc() }}, {{newHour}}</button>
</template>

<script setup lang="ts">
import {myFunc} from '../utils/testFunc';
import { addHours } from "date-fns";
const newHour = addHours(new Date, 2);
</script>
