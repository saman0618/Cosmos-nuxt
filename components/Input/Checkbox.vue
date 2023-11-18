<template>
    <div class="flex items-center">
        <input id="default-checkbox" type="checkbox" value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-blue-600  ring-offset-gray-800 focus:ring-2  bg-gray-700  border-gray-600">
        <label for="default-checkbox" class="ms-2 text-sm font-medium text-[#7D7D88]  text-gray-300">{{ labelText
        }}</label>

    </div>
</template>
<script>
export default {
    props: {
        labelText: {
            type: String,
        }
    }
}
</script>