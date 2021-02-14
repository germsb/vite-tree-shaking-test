<template>
    <span class="inline-block" ref="tipRef">
        <slot></slot>
    </span>
</template>
<script setup lang="ts">
import tippy from 'tippy.js';
import type {Placement, Instance} from 'tippy.js';
import {defineProps, onMounted, watchEffect, ref} from 'vue';
import type {PropType} from 'vue';
const props = defineProps({
    content: {default: 'je suis un tooltip', type: String},
    placement: {default: 'auto', type: String as PropType<Placement>},
    delayIn: {default: 200, type: Number},
    delayOut: {default: 0, type: Number},
    enable: {default: true, type: Boolean},
    show: {default: false, type: Boolean},
});
const tipRef = ref<Element>();
onMounted(() => {
    tippy.setDefaultProps({animation: false})
    const inst = tippy(tipRef.value as Element);
    watchEffect(() => {
        props.enable ? inst.enable() : inst.disable();
        if (inst.state.isEnabled) {
            inst.setProps({
                content: props.content,
                delay: [props.delayIn, props.delayOut],
                //trigger: 'click',
                offset: [0, 10],
                placement: props.placement,
            });
            props.show ? inst.show() : inst.hide();
        }
    }, {});
});
</script>
<style>
@import 'tippy.js/dist/tippy.css';
</style>
