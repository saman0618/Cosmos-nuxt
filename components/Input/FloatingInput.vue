<template>
    <div class="relative mb-4">
      <input
        :type="type"
        class="bg-white border focus:outline-none border-[#DBDBDB] text-[#7D7D88] text-sm rounded-lg block w-full py-3.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="className"
        :placeholder="placeh"
        v-model="inputValue"
        @focus="isFocused = true"
        @blur="onBlur"
      />
      <label
        :for="inputId"
        class="absolute left-4 -top-2.5 text-xs text-[#7D7D88] dark:text-white transition-transform origin-0 duration-300"
        :class="{ 'transform translate-y-0.5': isFocused || inputValue }"
      >
        {{ placeh }}
      </label>
      <!-- Add your icon here if needed -->
      <!-- <i class="absolute right-4 top-1 text-gray-400 dark:text-gray-300">YourIconComponent</i> -->
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      placeh: {
        type: String,
      },
      type: {
        type: String,
        required: true,
      },
      className: {
        type: String,
      },
    },
    data() {
      return {
        isFocused: false,
        inputValue: "",
        inputId: `input-${Math.floor(Math.random() * 10000)}`,
      };
    },
    methods: {
      onBlur() {
        if (!this.inputValue) {
          this.isFocused = false;
        }
      },
    },
  };
  </script>
  