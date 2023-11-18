<template>
    <div class="surface w-full h-screen">
        <div class="card flex flex-col gap-6">
            <h1 class="title">Ro’yxatdan o’tish</h1>
            <div class="form">
                <label for="number">Parol o‘ylab toping</label>
                <!-- InputGroup -->
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="@/assets/images/LoginPass.svg" alt="">
                    </span>
                    <Input placeh="yangi parol" type="password"
                        className="input border-l-0 rounded-t-none rounded-b-none" />
                </div>
                <!-- InputGroup -->
            </div>
            <div class="form">
                <label for="number">Parolni tasdiqlang</label>
                <!-- InputGroup -->
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="@/assets/images/LoginPass.svg" alt="">
                    </span>
                    <Input placeh="yangi parolni takrorlang" type="password"
                        className="input border-l-0 rounded-t-none rounded-b-none" />
                </div>
                <!-- InputGroup -->
            </div>
            <div class="flex justify-between">
                <Button label="Orqaga qaytish" className="border bg-white" labelClass="text-[#636282]" />
                <Button label="Saqlash" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    layout: "auth"
}
</script>
<style scoped>@import url('../auth.css');</style>