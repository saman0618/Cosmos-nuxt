<template>
    <div>
        <span v-show="blue" class="bg-white text-blueTheme border border-blueTheme text-md font-medium me-2 px-3 py-2 rounded-[18px] ">{{ label }}</span>
        <span v-show="purple" class="bg-purpleTheme text-white border border-purpleTheme text-md font-medium me-2 px-3 py-2 rounded-[18px] ">{{ label }}</span>
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