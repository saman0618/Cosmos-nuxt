<script setup>
import Search from '~/components/searchinp/Searchinp'

import Coursflit from '~/components/Select/select'
import Button from '~/components/adminbutton/Adminbutton'
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import WButton from '../../components/wButton/WButton.vue'



const courses = ref([
  {
    id: 1,
    name: 'Scratch dasturlash kursi',
    direction: 'Kursga oid',
    students: 'Dasturlash',
    status: 'To’liq',
    extra: [],
  },
  {
    id: 2,
    name: 'Figma to’liq kursi',
    direction: 'Kursdan tashqari',
    students: 'Dizayn',
    status: 'To`liq emas',
    extra: [],
  },
  {
    id: 3,
    name: 'Arduino kursi',
    author: 'Ibrohim Qodirov',
    direction: 'Kursdan tashqari',
    students: 'Umumiy',
    status: 'To`liq emas',
    extra: [],
  },
])

onMounted(() => {
  initFlowbite()
  onMounted()
})
</script>

<template>
  <div class="">
    <div class="flex mt-5 px-6">
      <Search />
      <Coursflit class="ml-6" />
      <Coursflit />
      <Button />
    </div>

    <div class="overflow-x-auto m-[24px] mt-5 rounded-xl">
      <div class="mx-auto bg-white shadow-md w-full">
        <!-- Заголовок таблицы -->
        <div
          class="text-[18px] font-medium text-[#000000] border-b-1 grid grid-cols-6 bg-cyan-100 p-4"
        >
          <div class="w-full text-left px-1 py-3 col-span-3">Test nomi</div>
          <div class="w-full text-left px-5 py-3">Test turi</div>
          <div class="w-full text-right px-2 py-3">Test yo’nalishi</div>
          <div class="w-full text-right py-3 px-2">Status</div>
        </div>

        <!-- Строки таблицы -->
        <div class="py-2 px-4">
          <div
            class="grid grid-cols-6 rounded-[12px] font-normal bg-[#FAFBFE] text-center border-1 mb-5 mt-5"
            v-for="course in courses"
            :key="course.id"
          >
            <div class="w-full flex items-center col-span-3">
              <div
                class="px-6 py-4 font-normal text-[16px] flex items-center gap-5"
              >
                <img src="@/assets/icon/Rectangle 7.svg" alt="" />
                <h1 class="">{{ course.name }}</h1>
              </div>
            </div>

            <div class="w-full flex items-center px-6 py-4">
              {{ course.direction }}
            </div>
            <div class="w-full flex items-center justify-end px-8 py-4">
              {{ course.students }}
            </div>
            <div class="w-full flex items-center justify-end px-6 py-4">
            
              <WButton :text="course.status" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

@tailwind components;
@layer components {
  
}
</style>