<script lang="ts">
export default {
  name: "Reclamain",
};

</script>
<template>

<div class="px-8 pt-5">
    <h1 class="text-[18px]">Siz o‘rganayapsiz</h1>
    <div class="flex items-center rounded-xl bg-white  border-2  border-slate-300 p-4 mt-5">
        <div class="">
            <img src="@/assets/images/Ellipse 87.svg" alt="">
        </div>
        <div class="px-5">
            <div class="py-2">
                <h1 class="inline-block font-semibold text-md">Dasturlash</h1>
                <span class="p-1 px-2 rounded-md bg-blue-100">1-modul</span>
                <span class="p-1 px-2 rounded-md bg-blue-100">7-dars</span>
            </div>
            <span class="block bg-yellow-100 rounded-md p-2 rounded-md">Uyga vazifa topshirilmagan</span>
        </div>
        <div class="ml-auto">
            <Button label="Davom Ettirish" />
        </div>
    </div>
</div>
</template>
