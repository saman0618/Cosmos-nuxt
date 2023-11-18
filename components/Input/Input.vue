<template>
    <input :type="type"
        class="bg-white border focus:outline-none border-[#DBDBDB] text-[#7D7D88] text-sm rounded-lg block w-full py-3.5 px-4   bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
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