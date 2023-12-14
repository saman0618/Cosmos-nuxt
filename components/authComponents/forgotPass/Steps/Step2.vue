<template>
  <div class="surface w-full h-screen flex justify-center items-center">
    <div class="bg-white card flex flex-col w-1/3 gap-6">
      <h1 class="text-[24px]">Parolni qayta tiklash</h1>
      <h1 class="text-lg my-2 text-center">
        +998 90 *** *** 22
        <br>
        raqamiga SMS yuborildi
      </h1>
      <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-[10px]">
            <label for="" class="">Tasdiqlash kodini kiriting</label>
            <Input  type="number" placeh="_ _ _ _"/>
          </div>
        <div class="text-center">
          <Stopwatch/>
        </div>
        <div class="flex gap-12 justify-between">
          <button class="buttonOutline">Orqaga qaytish</button>
          <button class="button" @click="$emit('nextStep')">Davom etish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth"
}
</script>
