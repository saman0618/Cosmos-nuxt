<template>
    <div>
        <div class="flex justify-between items-center rounded-xl bg-white  border-2  border-slate-300 p-4 mt-5 ">
                <h1>{{ notifText }}</h1>
                <img src="@/assets/icon/Close Circle.svg" alt="">
            </div>
    </div>
</template>
<script>
export default {
    props: {
        notifText: {
            type: String,
        }
    }
}
</script>