<template>
    <input :type="type"
        class="bg-white border focus:outline-none border-[#DBDBDB] text-[#7D7D88] text-sm rounded-lg block w-full py-3.5 px-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="className"
        :placeholder="placeh">
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
        }
    }
}
</script>