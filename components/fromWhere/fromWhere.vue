<!-- NamedRoute.vue -->
<template>
    <div class="my-9">
        <span v-for="(route, index) in initialRoute" :key="index"
            class="p-[12px] bg-[#E3F8FF] text-[#7D7D88] rounded-full mr-3">
            {{ route }}
        </span>

        <span class="p-[12px] bg-[#E3F8FF] text-[#0766FF] rounded-full">{{ currentPage }}</span>
    </div>
</template>
  
<script setup>
// Определение props
const props = defineProps(['initialRoute', 'currentPage']);
</script>
  