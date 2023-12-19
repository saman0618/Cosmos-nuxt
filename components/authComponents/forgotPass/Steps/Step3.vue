<template>
  <div class="surface w-full h-screen flex justify-center items-center">
    <div class="bg-white card flex flex-col w-1/3 gap-[24px]">
      <h1 class="text-[24px]">Ro’yxatdan o’tish</h1>
      <div class="flex flex-col w-full gap-[10px]">
        <!-- Поле для ввода пароля -->
        <div class="flex flex-col gap-[10px]">
          <label for="number">Parolingiz</label>
          <!-- InputGroup -->
          <div class="flex">
                    <span
                      class="inline-flex items-center pl-3 text-sm border border-r-0  rounded-e-0 bg-transparent border-borderColor rounded-s-md bg-gray-600 text-gray-400">
                        <img src="@/assets/images/LoginPass.svg" alt="">
                    </span>
            <Input placeh="Parol" type="password" className="border-l-0 rounded-bl-none rounded-tl-none " style="border-left: none; border-bottom-left-radius: 0; border-top-left-radius: 0;" />
          </div>
          <div class="flex flex-col gap-[10px]">
          <label for="number">Parolni tasdiqlang</label>
          <!-- InputGroup -->
            <div class="flex">
                      <span
                        class="inline-flex items-center pl-3 text-sm border border-r-0  rounded-e-0 bg-transparent border-borderColor rounded-s-md bg-gray-600 text-gray-400">
                          <img src="@/assets/images/LoginPass.svg" alt="">
                      </span>
              <Input placeh="Parol" type="password" className="border-l-0 rounded-bl-none rounded-tl-none " style="border-left: none; border-bottom-left-radius: 0; border-top-left-radius: 0;" />
            </div>
          <!-- InputGroup -->
          </div>
          <div class="flex justify-between">
            <button class="button-secondary-outline" style="padding: 14px !important; color: #7D7D88;">Orqaga qaytish</button>
            <button class="button" style="padding: 14px 24px !important;">Saqlash</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

