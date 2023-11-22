<template>
    <div>
        <span v-show="blue" class="inline-block bg-white text-blueTheme border-2 border-blueTheme text-md font-semibold me-2 px-3 py-0.5 rounded-full ">{{ label }}</span>
        <span v-show="purple" class="inline-block bg-purpleTheme text-white border border-purpleTheme text-md font-medium me-2 px-3 py-0.5 rounded-full ">{{ label }}</span>
    </div>
</template>
<script>
export default {
    props: {
        blue: {
            type: Boolean
        },
        purple: {
            type: Boolean
        },
        label: {
            type: String
        }
    }
}
</script>