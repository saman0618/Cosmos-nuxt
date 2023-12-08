<!-- DropdownDots.vue -->
<template>
  <div>
    <button :id="`dropdownMenuIconButton_${uniqueId}`" data-dropdown-toggle="dropdownDots"
      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg focus:outline-none"
      type="button" @click="toggleDropdown">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
        <path
          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div :id="`dropdownDots_${uniqueId}`" :class="{ 'hidden': !isDropdownVisible }"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="`dropdownMenuIconButton_${uniqueId}`">
        <li v-for="(link, index) in links[0]" :key="index">
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ link
          }}</a>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#FF3131]">O’chirish</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['links']);
const isDropdownVisible = ref(false);
const uniqueId = Math.random().toString(36).substring(7);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>
