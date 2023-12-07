<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'


const courses = ref([
  {
    id: 1,
    name: 'Scratch dasturlash kursi',
    author: 'Davron Rustamov',
    direction: 'IT',
    students: 32,
    status: 'Faol',
    extra: [],
  },
  {
    id: 2,
    name: 'Figma to’liq kursi',
    author: 'Ibrohim Qodirov',
    direction: 'Dizayn',
    students: '138',
    status: 'Faol',
    extra: [],
  },
  {
    id: 3,
    name: 'Arduino kursi',
    author: 'Ibrohim Qodirov',
    direction: 'Robototexnika',
    students: 87,
    status: 'Qoralama',
    extra: [],
  },
  {
    id: 4,
    name: 'Qiziqarli matematika',
    author: 'Munisa Qodirova',
    direction: 'Fan',
    students: 32,
    status: 'Faol',
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
    
    <div class=" mx-auto bg-white  shadow-md w-full ">
      <!-- Заголовок таблицы -->
      <div
        class=" font-bold text-[16px] text-[#000000] uppercase border-b-1 grid grid-cols-7   bg-cyan-100 p-5"
      >
        <div class="w-full text-left px-6 py-3 col-span-2   ">Kurs</div>
        <div class="w-full text-left px-6 py-3">Muallif</div>
        <div class="w-full text-left px-6 py-3">Yo‘nalish</div>
        <div class="w-full text-left px-6 py-3">O’quvchilar</div>
        <div class="w-full text-left px-6 py-3">Status</div>
        <div class="w-full text-right px-6 py-3">Yana</div>
      </div>

      <!-- Строки таблицы -->
      <div class="py-2 px-4">
        <div
          class=" grid grid-cols-7 rounded-[16px] bg-[#FAFBFE] text-center border-1 mb-2"
          v-for="course in courses"
          :key="course.id"
        >
          <div class="w-full flex items-center col-span-2   ">
            <div
              class="px-6 py-4 font-normal text-[16px]  flex items-center gap-5 "
            >
              <img src="@/assets/icon/Rectangle 7.svg" alt="" />
              <h1 class="">{{ course.name }}</h1>
            </div>
          </div>
          <div class="w-full flex items-center  px-6 py-4">
            {{ course.author }}
          </div>
          <div class="w-full flex items-center  px-6 py-4">
            {{ course.direction }}
          </div>
          <div class="w-full flex items-center  px-6 py-4">
            {{ course.students }}
          </div>
          <div class="w-full flex items-center  px-6 py-4">
            <button
              class="rounded-lg text-center w-[44px] h-[26px] bg-[#0BB68D] text-white" 
            >
              {{ course.status }}
            </button>
          </div>
          <div class="px-6 py-4 text-right">
          <button
              id="dropdownMenuIconButton"
              :data-dropdown-toggle="course.id"
              class="inline-flex items-center p-2 text-[16px] font-medium text-center text-gray-900 bg-white rounded-full "
              type="button1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 4 15"
              >
                <path
                  d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </button>
          </div>
          <div
              :id="course.id"
              class="z-10 hidden divide-y text-[16px] divide-gray-100 rounded-lg shadow bg-white"
            >
              <ul
                class="py-2 text-[16px]"
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2">
                    Tahrirlash
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2">
                    Nusxalash
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-red-600">
                    O’chirish
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
