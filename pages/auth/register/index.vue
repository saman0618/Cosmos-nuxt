<template>
    <div class="surface w-full h-screen">
        <div class="card">
            <h1 class="title">Ro’yxatdan o’tish</h1>
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
            <button class="button">Ro'yxatdan o'tish</button>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                <span
                    class="absolute px-3 font-medium text-[#7D7D88] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">yoki</span>
            </div>
            <button class="button outline border buttonIconFlex" style="background: transparent;">
                <img src="@/assets/images/google.svg" alt="">
                <span class="text-[#7d7d88]">Google bilan</span>
            </button>
            <h1 class="text-[#7D7D88] text-center">Ro’yxatdan o’tkanmisiz? <a href="#" class="text-[#0766FF]">Profilga
                    kirish</a></h1>
        </div>
    </div>
</template>

<style scoped>
@import url('../auth.css');
</style>
<script>
export default {
    layout: "auth"
}
</script>
