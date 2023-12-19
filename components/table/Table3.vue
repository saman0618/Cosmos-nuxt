<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

const courses = ref([
  {
    id: 1,
    name: '1 Modul. Scratch dasturi bilan tanishish',

    icon: 'Rectangle 7.svg',
    status: 'Faol',
    extra: [],
  },
  {
    id: 2,
    name: '2 Modul. Scratch dasturida spraytlar bilan ishlash',

    icon: 'Rectangle 7.svg',
    status: 'Faol',
    extra: [],
  },
  {
    id: 3,
    name: '3 Modul. Scratch dasturida spraytlar bilan ishlash',

    icon: 'Rectangle 7.svg',
    status: 'Faol',
    extra: [],
  },
  {
    id: 4,
    name: '4 Modul. Scratch dasturida spraytlar bilan ishlash',
    icon: 'Rectangle 7.svg',
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

      <!-- Строки таблицы -->
      <div class="py-2 px-4">
        <div
          class="flex justify-between rounded-[16px] bg-[#FAFBFE] text-center border-1 mb-2"
          v-for="course in courses"
          :key="course.id"
        >
          <div class="w-full flex items-center col-span-3">
            <div
              class="px-6 py-4 font-normal text-[16px] flex items-center gap-5"
            >
              <img v-if="course.icon" :src="require(`@/assets/icon/${course.icon}`)" />
              <h1 class="">{{ course.name }}</h1>
            </div>
          </div>

          <div class="w-full flex items-center justify-end px-6 py-4">
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
              class="inline-flex items-center p-2 text-[16px] font-medium text-center text-gray-900 bg-white rounded-full"
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
