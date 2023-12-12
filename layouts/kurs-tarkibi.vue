<template>
    <div class="flex justify-between">
        <Sidebar />
        <div class="flex flex-col flex-1">
            <Header />
            <div class="flex-3 p-6">
                <div class="bg-white p-3 flex justify-between rounded-[12px] ">
                    <ul class="flex gap-[24px]">
                        <li><a href="#" class="font-medium hover:text-[#0766FF]">Asosiy</a></li>
                        <li><a href="#" class="font-medium hover:text-[#0766FF]">Kurs dasturi</a></li>
                        <li><a href="#" class="font-medium hover:text-[#0766FF]">O’quvchilar</a></li>
                        <li><a href="#" class="font-medium hover:text-[#0766FF]">Testlar</a></li>
                        <li><a href="#" class="font-medium hover:text-[#0766FF]">Sozlamalar</a></li>
                    </ul>
                    <ul>
                        <span>O'quvchilar: <img src="~/assets/icon/Users Group Rounded.svg" class="inline-block" /> {{ students }}</span>
                    </ul>
                </div>
                <Nuxt />
            </div>
        </div>
    </div>
</template>
  
<style scoped></style>
<script setup>
import { ref } from 'vue'

const students = ref(498)
</script>
  