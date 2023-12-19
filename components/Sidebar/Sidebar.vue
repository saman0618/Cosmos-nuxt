<script lang="ts">
export default {
  name: 'Navbar',
}
</script>

<template>
  <div class="sidebar">
    <div
      class="px-4 py-2 w-max inline-block overflow-scroll bg-white h-[100vh]"
      style="box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05)"
    >
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div
      class="px-4 py-2 w-max inline-block bg-white overflow-auto h-[100vh] fixed left-0"
      style="box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);"

    >
      <img src="@/assets/images/logo.png" alt="" />
      <section class="flex flex-col">
        <NuxtLink
          to="/"
          class="flex px-2 text-[#7D7D88] hover:text-blue-500 text-[18px] font-medium mt-8"
        >
          <img class="mr-1" src="@/assets/icon/Home Smile Angle.svg" alt="" />
          Bosh sahifa
        </NuxtLink>
        <NuxtLink
          to="/courses"
          class="top flex px-2 hover:text-blue-500 text-[#7D7D88] mt-8 text-[18px] font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <style>
              .icon {
                fill: #7d7d88;
                transition: fill 0.3s ease;
              }

              .icon:hover {
                fill: #0766ff;
              }
            </style>
            <path
              opacity="0.5"
              d="M4.93881 3.58579C4.35303 4.17157 4.35303 5.11438 4.35303 7V14H19.6471V7C19.6471 5.11438 19.6471 4.17157 19.0614 3.58579C18.4756 3 17.5328 3 15.6471 3H8.35303C6.46741 3 5.5246 3 4.93881 3.58579Z"
              fill="#7D7D88"
              fill-opacity="0.6"
              class="icon"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.3911 16.3358C21.4356 16.3818 21.4579 16.4048 21.4787 16.4276C21.7998 16.7802 21.9843 17.2358 21.999 17.7124C22 17.7433 22 17.7753 22 17.8393C22 17.9885 22 18.0631 21.996 18.1261C21.9325 19.1314 21.1314 19.9325 20.1261 19.996C20.0631 20 19.9885 20 19.8393 20H4.16068C4.01148 20 3.93688 20 3.87388 19.996C2.86865 19.9325 2.06749 19.1314 2.00398 18.1261C2 18.0631 2 17.9885 2 17.8393C2 17.7753 2 17.7433 2.00096 17.7124C2.01569 17.2358 2.20022 16.7802 2.52127 16.4276C2.54205 16.4048 2.56429 16.3819 2.60869 16.336L3.90311 15H20.0969L21.3911 16.3358ZM8.75 18C8.75 17.5858 9.08579 17.25 9.5 17.25H14.5C14.9142 17.25 15.25 17.5858 15.25 18C15.25 18.4142 14.9142 18.75 14.5 18.75H9.5C9.08579 18.75 8.75 18.4142 8.75 18Z "
              fill="#7D7D88"
              fill-opacity="0.6"
              class="icon"
            />
            <path
              d="M12.75 5.75C12.75 6.16421 12.4142 6.5 12 6.5C11.5858 6.5 11.25 6.16421 11.25 5.75C11.25 5.33579 11.5858 5 12 5C12.4142 5 12.75 5.33579 12.75 5.75Z"
              fill="#7D7D88"
              fill-opacity="0.6"
              class="icon"
            />
          </svg>
          <h1 class="icon">Kurslar</h1>
        </NuxtLink>
        <NuxtLink
          to="/tests"
          class="flex px-2 hover:text-blue-500 text-[#7D7D88] mt-8 text-[18px] font-medium"
          style="transition: color 0.3s ease;"
        >
          <img
            class="mr-1"
            src="@/assets/icon/Checklist Minimalistic.svg"
            alt=""
          />
          Testlar
        </NuxtLink>
        <NuxtLink
          to="/students"
          class="flex px-2 hover:text-blue-500 text-[#7D7D88] mt-8 text-[18px] font-medium"
        >
          <img
            class="mr-1"
            src="@/assets/icon/Users Group Rounded.svg"
            alt=""
          />
          O‘quvchilar
        </NuxtLink>
        <NuxtLink
        to="/employees"
          class="flex px-2 hover:text-blue-500 text-[#7D7D88] mt-8 text-[18px] font-medium"
        >
          <img class="mr-1" src="@/assets/icon/Case Minimalistic.svg" alt="" />
          Hodimlar
        </NuxtLink>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Letter.svg" alt="" />
          SMS xabarlar
        </h1>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Cart.svg" alt="" />
          Shop
        </h1>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Calendar.svg" alt="" />
          Tadbirlar
        </h1>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Shield Star.svg" alt="" />
          Yutuqlar
        </h1>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Cup Star.svg" alt="" />
          Reytinglar
        </h1>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Pie Chart 2.svg" alt="" />
          Analitika
        </h1>
        <h1 class="flex px-2 text-[#7D7D88] mt-8 text-[18px] font-medium">
          <img class="mr-1" src="@/assets/icon/Gamepad.svg" alt="" />
          O‘yinlar
        </h1>
      </section>
      <h1 class="text-[18px] text-[#63628266] font-medium px-2 mt-14">
        KOSMOS © 2023
      </h1>
    </div>
  </div>
</template>
<style>
.sidebar > ::-webkit-scrollbar {
  width: 12px;
}

.sidebar > ::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

.sidebar > ::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: transparent;
}

.sidebar > ::-webkit-scrollbar-thumb:window-inactive {
  background: transparent;
}
</style>
