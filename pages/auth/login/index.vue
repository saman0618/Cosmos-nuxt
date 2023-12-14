<template>
    <div class="surface w-full h-screen">
        <div class="card">
            <h1 class="title">Kirish</h1>
            <div class="form">
                <label for="number">Telefon raqamingiz</label>
                <!-- InputGroup -->
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 bg-transparent border-borderColor rounded-s-md bg-gray-600 text-gray-400">
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
                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 bg-transparent border-borderColor rounded-s-md bg-gray-600 text-gray-400">
                        <img src="@/assets/images/LoginPass.svg" alt="">
                    </span>
                    <Input placeh="Parol" type="password" className="border-l-0 rounded-bl-none rounded-tl-none " style="border-left: none; border-bottom-left-radius: 0; border-top-left-radius: 0;" />
                </div>
                <!-- InputGroup -->
            </div>
            <div class="flex justify-between gap-3 items-center">
                <Checkbox labelText="Eslab qolish" />
                <NuxtLink to="/auth/forgotPass" exact class="text-[#0766FF]">Parolni unutdingizmi?</NuxtLink>
            </div>
            <button class="button">
                Davom eting
            </button>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-4 border-0 bg-borderColor">
                <span
                    class="absolute px-3 font-medium text-[#7D7D88] -translate-x-1/2  left-1/2 bg-white">yoki</span>
            </div>

            <button class="button-secondary-outline buttonFlex py-[12px] px-[16px] text-[#7D7D88]">
              <img src="~/assets/images/google.svg" alt="">
              <span>Google bilan kiring</span>

            </button>
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
@import url('../auth.css');
</style>
