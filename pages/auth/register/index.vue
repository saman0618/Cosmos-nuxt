<template>
    <div class="surface w-full h-screen">
        <div class="card">
            <h1 class="title">Ro’yxatdan o’tish</h1>
            <div class="form">
                <label for="number">Telefon raqamingiz</label>
                <!-- InputGroup -->
                <div class="flex w-full">
                    <span
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-borderColor rounded-s-md">
                        <img src="~/assets/images/LoginCall.svg" alt="">
                    </span>
                    <InputMask placeh="+998-99-999-99-99" />
                </div>
                <!-- InputGroup -->
            </div>
            <button class="button">Ro'yxatdan o'tish</button>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-2 bg-gray-200 border-0 ">
                <span
                    class="absolute px-3 font-medium text-[#7D7D88] -translate-x-1/2 bg-white left-1/2 ">yoki</span>
            </div>

            <button class="button-secondary-outline py-[12px] px-[16px] buttonFlex">
              <img src="~/assets/images/google.svg" alt="">
              <span>Google bilan</span>
            </button>
            <h1 class="text-[#7D7D88] text-center">Ro’yxatdan o’tkanmisiz? <NuxtLink to="/auth/login" exact class="text-[#0766FF]">Profilga
                    kirish</NuxtLink></h1>

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

