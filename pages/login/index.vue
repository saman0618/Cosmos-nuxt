<template>
    <div class="surface w-full h-screen">
        <div class="card">
            <h1 class="title">Kirish</h1>
            <div class="form">
                <label for="number">Telefon raqamingiz</label>
                <!-- InputGroup -->
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="@/assets/images/LoginCall.svg" alt="">
                    </span>
                    <InputMask placeh="+998-99-999-99-99" />
                </div>
                <!-- InputGroup -->
            </div>
            <div class="form">
                <label for="number">Parolingiz</label>
                <!-- InputGroup -->
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="@/assets/images/LoginPass.svg" alt="">
                    </span>
                    <Input placeh="Parol" type="password" className="input border-l-0 rounded-t-none rounded-b-none" />
                </div>
                <!-- InputGroup -->
            </div>
            <div class="flex justify-between items-center">
                <Checkbox labelText="Eslab qolish" />
                <a href="#" class="text-[#0766FF]">Parolni unutdingizmi?</a>
            </div>
            <Button label="Davom eting" />
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                <span
                    class="absolute px-3 font-medium text-[#7D7D88] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">yoki</span>
            </div>
            <Button icon="@/assets/images/google.svg" class="bg-transparent border-2" labelClass="text-[#7D7D88]"
                label="Google bilan kiring" />
            <h1 class="text-[#7D7D88] text-center">Yangimisiz? <a href="#" class="text-[#0766FF]">Ro'yxatdan o'ting</a></h1>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    layout: "auth"
}
</script>
<style scoped>
@import url('./login.css');
</style>