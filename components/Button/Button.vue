<template>
    <button type="button" :class="className"
        class="text-white bg-[#0766FF]  focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <div class="flex gap-2 items-center justify-center">
            <img :src="icon" alt="">
            <p :class="labelClass">{{ label }}</p>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
        },
        icon: {
            type: String,
        },
        labelClass: {
            type: String,
        },
        className: {
            type: String, // Change the property name to className
        },
    },
};
</script>
