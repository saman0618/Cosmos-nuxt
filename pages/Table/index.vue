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
  <div class="overflow-x-auto m-[24px] mt-10 rounded-xl border-2">
    <table class="text-[16px] text-left w-full">
      <thead
        class="text-[16px] text-[#000000] uppercase border-b-1 bg-cyan-100"
      >
        <tr class="   ">
          <th scope="col" class="px-6 py-3">
            Kurs
          </th>
          <th scope="col" class="px-6 py-3">
            Muallif
          </th>
          <th scope="col" class="px-6 py-3">
            Yo‘nalish
          </th>
          <th scope="col" class="px-6 py-3">
            O’quvchilar
          </th>
          <th scope="col" class="px-6 py-3">
            Status
          </th>
          <th scope="col" class="px-6 py-3">
            Yana
          </th>
        </tr>
      </thead>

      <tbody class="">
        <tr v-for="course in courses" :key="course.id" class="border-2 rounded">
          <th scope="row" class="font-medium">
            <div
              class="px-6 py-4 font-normal text-[16px] flex items-center gap-5"
            >
              <img src="@/assets/icon/Rectangle 7.svg" alt="" />
              <h1 class="">{{ course.name }}</h1>
            </div>
          </th>
          <td class="px-6 py-4">
            {{ course.author }}
          </td>
          <td class="px-6 py-4">
            {{ course.direction }}
          </td>
          <td class="px-6 py-4">
            {{ course.students }}
          </td>
          <td class="px-6 py-4">
            <button
              class="rounded-lg text-center w-[44px] h-[26px] bg-[#0BB68D] text-white"
            >
              {{ course.status }}
            </button>
          </td>

          <td class="px-6 py-4">
            <button
              id="dropdownMenuIconButton"
              :data-dropdown-toggle="course.id"
              class="inline-flex items-center p-2 text-[16px] font-medium text-center text-gray-900 bg-white rounded-full focus:ring-4 focus:outline-none"
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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
