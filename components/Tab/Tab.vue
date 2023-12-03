<template>
    <div class="w-full p-4 flex bg-white gap-[24px] rounded-[12px]" style="box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);">
        <button class="py-[12px] px-[18px] active rounded-[12px] flex w-max gap-[10px]">
            <img src="~/assets/icon/account.svg" alt="">
            <span class="">Asosiy ma’lumotlar</span>
        </button>
        <button class="py-[12px] px-[18px] default rounded-[12px] flex w-max gap-[10px]">
            <img src="~/assets/icon/bitcoin.svg" alt="">
            <span class="">Amallar tarixi</span>
        </button>
        <button class="py-[12px] px-[18px] default rounded-[12px] flex w-max gap-[10px]">
            <img src="~/assets/icon/secure.svg" alt="">
            <span class="">Havfsizlik</span>
        </button>
    </div>
</template>
  
<script setup>

</script>

<style scoped>
.active {
    background: #E3F8FF;
    color: rgba(7, 102, 255, 1);
}
.default {
    background: rgba(248, 250, 253, 1);
    color: rgba(125, 125, 136, 1);
}
</style>

