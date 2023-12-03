<template>
    <div class="flex flex-col gap-[24px]">
        <h1 class="text-dark text-[18px] font-bold">Parolni o‘zgartirish</h1>
        <div class="flex gap-[24px]">
            <InputPass placeh="Joriy parol" />
            <InputPass placeh="Yangi parol" />
            <InputPass placeh="Parolni takrorlang" />
        </div>
        <button class="button w-max">Saqlash</button>
    </div>
</template>
<script>
export default {
    layout: 'settings'
}
</script>