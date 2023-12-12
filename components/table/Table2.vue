<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

const courses = ref([
  {
    id: 1,
    name: 'Scratch dasturlash kursi',
    author: 'Davron Rustamov',
    direction: 'IT',
    students: '+99890 0056222',
    status: 'Faol',
    extra: [],
  },
  {
    id: 2,
    name: 'Figma to’liq kursi',
    author: 'Ibrohim Qodirov',
    direction: 'Dizayn',
    students: '+99890 0056222',
    status: 'Faol',
    extra: [],
  },
  {
    id: 3,
    name: 'Arduino kursi',
    author: 'Ibrohim Qodirov',
    direction: 'Robototexnika',
    students: '+99890 0056222',
    status: 'Faol',
    extra: [],
  },
  {
    id: 4,
    name: 'Qiziqarli matematika',
    author: 'Munisa Qodirova',
    direction: 'Fan',
    students: '+99890 0056222',
    status: 'Nofaol',
    extra: [],
  },
])

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
  onMounted()
})
</script>
<template>

    <div class="overflow-x-auto m-[24px] mt-5 rounded-xl">
      <div class="mx-auto bg-white shadow-md w-full">
        <!-- Заголовок таблицы -->
        <div
          class=" text-[18px] text-[#000000] border-b-1 grid grid-cols-6 bg-cyan-100 p-4"
        >
          <div class="w-full text-left px-6 py-3 col-span-3">Ism familya</div>

          <div class="w-full text-left px-6 py-3">Yo‘nalish</div>
          <div class="w-full text-left px-6 py-3">Telefon</div>
          <div class="w-full text-center px-6 py-3">Status</div>
        </div>

        <!-- Строки таблицы -->
        <div class="py-2 px-4">
          <div
            class="grid grid-cols-6 rounded-[12px] bg-[#FAFBFE] text-center border-1 mb-2"
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
            <div class="w-full flex items-center px-6 py-4">
              {{ course.students }}
            </div>
            <div class="w-full flex items-center justify-end px-6 py-4">
              <button
                class="rounded-lg text-center w-[44px] h-[26px] bg-[#0BB68D] text-white"
              >
                {{ course.status }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
