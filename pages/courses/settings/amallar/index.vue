<template>
    <div class="flex flex-col gap-[12px] w-full">
        <div v-for="amal in amallar" :key="amal.type"
            class="bg-cardBg shadow-themed w-full rounded-[12px] p-[12px] flex justify-between">
            <h1 class="flex-1">{{ amal.date }}</h1>
            <h1 class="flex-1" :class="{ 'positive': amal.type === 'income', 'negative': amal.type === 'expense' }">{{
                amal.from }}</h1>
            <h1 class="flex-1">{{ amal.desc }}</h1>
            <h1 class="flex-1 text-right"
                :class="[{ 'positive': amal.type === 'income', 'negative': amal.type === 'expense' }]">
                <span
                    :class="['border', 'py-[8px]', 'px-[12px]', 'rounded-full', 'font-medium', '', { 'border-greenSuccess': amal.type === 'income', 'border-orangeColor': amal.type === 'expense' }]">
                    {{ formatPoints(amal.points, amal.type) }}
                </span>
            </h1>
        </div>
    </div>
</template>
  
<script>
export default {
    layout: 'settings'
}
</script>
  
<script setup>
import { ref } from 'vue';

const amallar = ref([
    {
        type: 'income',
        date: '24.09.2023',
        from: 'Referal',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '50'
    },
    {
        type: 'income',
        date: '24.09.2023',
        from: 'Referal',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '50'
    },
    {
        type: 'expense',
        date: '24.09.2023',
        from: 'Shop',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '250'
    },
    {
        type: 'income',
        date: '24.09.2023',
        from: 'Referal',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '50'
    },
    {
        type: 'income',
        date: '24.09.2023',
        from: 'Referal',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '50'
    },
    {
        type: 'expense',
        date: '24.09.2023',
        from: 'Tadbir',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '250'
    },    {
        type: 'expense',
        date: '24.09.2023',
        from: 'Naqd',
        desc: 'Do’stingizni taklif qilganingiz uchun berildi',
        points: '250'
    },
]);
const formatPoints = (points, type) => {
    return type === 'expense' ? `-${points}` : `+${points}`;
};
</script>
  
<style scoped>
.positive {
    color: rgba(11, 182, 141, 1);
}

.negative {
    color: rgba(255, 111, 7, 1);
}
</style>
  