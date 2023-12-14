<template>
  <div class="surface w-full h-screen flex justify-center items-center">
    <div class="bg-white card flex flex-col w-1/3 gap-6">
      <h1 class="text-[24px]">Parolni qayta tiklash</h1>
      <div class="flex flex-col w-full gap-3">
        <label for="number">Telefon raqamingiz</label>
        <!-- InputGroup -->
        <div class="flex w-full">
          <span
            class="inline-flex items-center pl-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md ">
            <img src="@/assets/images/LoginCall.svg" alt=""/>
          </span>
          <InputMask class="w-full" placeh="+998 -- --- -- -- " />
        </div>
        <div class="flex mt-3 justify-between">
          <button class="buttonOutline">Orqaga qaytish</button>
          <button class="button" @click="$emit('nextStep')">Davom etish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  emits: ['nextStep'],
};
</script>
