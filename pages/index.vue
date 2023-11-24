<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

const  courses = ref([
    {
        name: "Scratch dasturlash kursi",
        author: "Davron Rustamov",
        direction: 'IT',
        students: 32,
        status: 'Faol',
        extra: []
    },
    {
        name: "Figma to’liq kursi",
        author: "Ibrohim Qodirov",
        direction: 'Dizayn',
        students: '138',
        status: 'Faol',
        extra: []
    },
    {
        name: "Arduino kursi",
        author: "Ibrohim Qodirov",
        direction: 'Robototexnika',
        students: 87,
        status: 'Qoralama',
        extra: []
    },
    {
        name: "Qiziqarli matematika",
        author: "Munisa Qodirova",
        direction: 'Fan',
        students: 32,
        status: 'Faol',
        extra: []
    }
])

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
    onMounted();
})
</script>
<template>
    
  <div class="overflow-x-auto  m-[24px] mt-10 rounded-xl border-2">
    <table class="text-[16px]   text-left w-full">
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
        <tr v-for="course in courses" class="border-2 rounded">
          <th scope="row" class="font-medium  ">
            <div class="px-6 py-4 font-normal text-[16px] flex items-center gap-5">
              <img src="@/assets/icon/Rectangle 7.svg" alt="" />
              <h1 class="">{{ course.name }}</h1>
            </div>
          </th>
          <td class="px-6 py-4">
            {{ course.author }}
          </td>
          <td class="px-6 py-4">
            {{  course.direction }}
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

          <td class="px-6 py-4 ">
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots1"
              class="inline-flex items-center p-2 text-[16px] font-medium text-center text-gray-900  bg-white rounded-full  focus:ring-4 focus:outline-none  "
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
              id="dropdownDots1"
              class="z-10 hidden  divide-y text-[16px] divide-gray-100 rounded-lg shadow  bg-white"
            >
              <ul
                class="py-2 text-[16px]  "
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Tahrirlash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Nusxalash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-red-600 "
                  >
                  O’chirish
                  </a>
                </li>
              </ul>
              
            </div>

          </td>
        </tr>

        <!-- <tr class="">
          <th
            scope="row"
            class="px-6 py-4 text-[16px] font-normal flex items-center gap-5"
          >
            <img src="@/assets/icon/Rectangle 7.svg" alt="" />
            <h1>
              Figma to’liq kursi
            </h1>
          </th>
          <td class="px-6 py-4">
            Ibrohim Qodirov
          </td>
          <td class="px-6 py-4">
            Dizayn
          </td>
          <td class="px-6 py-4">
            138
          </td>
          <td class="px-6 py-4">
            <button
              class="rounded-lg text-center w-[44px] h-[26px] bg-[#0BB68D] text-white"
            >
              Faol
            </button>
          </td>
          <td class="px-6 py-4 ">
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots2"
              class="inline-flex items-center p-2 text-[16px] font-medium bg-white text-center text-gray-900  rounded-full  focus:ring-4 focus:outline-none  "
              type="button"
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
              id="dropdownDots2"
              class="z-10 hidden  divide-y text-[16px] divide-gray-100 rounded-lg  bg-white shadow "
            >
              <ul
                class="py-2 text-[16px]  "
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Tahrirlash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Nusxalash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-red-600 "
                  >
                  O’chirish
                  </a>
                </li>
              </ul>
              
            </div>
        
          </td>
        </tr> -->
        <!-- <tr class="">
          <th
            scope="row"
            class="px-6 py-4 font-normal text-[16px] flex items-center gap-5"
          >
            <img src="@/assets/icon/Rectangle 7.svg" alt="" />
            <h1>
              Arduino kursi
            </h1>
          </th>
          <td class="px-6 py-4">
            Ibrohim Qodirov
          </td>
          <td class="px-6 py-4">
            Robototexnika
          </td>
          <td class="px-6 py-4">
            87
          </td>
          <td class="px-6 py-4">
            <button
              class="rounded-lg text-center p-[8px] bg-[#7D7D88] text-white"
            >
              Qoralama
            </button>
          </td>
          <td class="px-6 py-4">
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots3"
              class="inline-flex items-center p-2 text-[16px] bg-white font-medium text-center text-gray-900  rounded-full  focus:ring-4 focus:outline-none  "
              type="button3"
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
              id="dropdownDots3"
              class="z-10 hidden  divide-y text-[16px] divide-gray-100 bg-white rounded-lg shadow "
            >
              <ul
                class="py-2 text-[16px]  "
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Tahrirlash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Nusxalash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-red-600 "
                  >
                  O’chirish
                  </a>
                </li>
              </ul>
              
            </div>
          </td>
        </tr>
        <tr class="">
          <th
            scope="row"
            class="px-6 py-4 font-normal text-[16px] flex items-center gap-5"
          >
            <img src="@/assets/icon/Rectangle 7.svg" alt="" />
            <h1>
              Qiziqarli matematika
            </h1>
          </th>
          <td class="px-6 py-4">
            Munisa Qodirova
          </td>
          <td class="px-6 py-4">
            Fan
          </td>
          <td class="px-6 py-4">
            791
          </td>
          <td class="px-6 py-4">
            <button
              class="rounded-lg text-center w-[44px] h-[26px] bg-[#0BB68D] text-white"
            >
              Faol
            </button>
          </td>
          <td class="px-6 py-4">

            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots4"
              class="inline-flex items-center p-2 text-[16px] bg-white font-medium text-center text-gray-900  rounded-full  focus:ring-4 focus:outline-none  "
              type="button"
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
              id="dropdownDots4"
              class="z-10 hidden  divide-y text-[16px] divide-gray-100 bg-white rounded-lg shadow "
            >
              <ul
                class="py-2 text-[16px]  "
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Tahrirlash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 "
                  >
                  Nusxalash
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-red-600 "
                  >
                  O’chirish
                  </a>
                </li>
              </ul>
              
            </div>
          </td>
        
        </tr> -->
      </tbody>
    </table>
  </div>
</template>
