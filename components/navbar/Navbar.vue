<script setup>


</script>

<template>

 

  <nav  class="rounded-xl bg-white px-2 border m-[24px] ">
  <div class="mx-auto max-w-7xl   ">
    <div class="relative flex h-16 items-center justify-between ">

      <div class="flex  items-center justify-center  sm:items-stretch sm:justify-start">
        <div class="hidden  sm:block">
          <div class="flex  ">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300  hover:text-white" -->
            <NuxtLink to="/courses/update" class=" text-[#0C0B42] d rounded-md px-3 py-2 text-sm font-medium" >Asosiy</NuxtLink>
            <a href="#" class="text-[#0C0B42] hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium">Kurs dasturi</a>
            <NuxtLink to="/courses/students" class="text-[#0C0B42]  hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium">O’quvchilar </NuxtLink>
            <NuxtLink to="/courses/tests" class="text-[#0C0B42]  hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium">Testlar</NuxtLink>
            <a href="#" class="text-[#0C0B42]  hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium">Sozlamalar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <h1>O‘quvchilar:</h1>
        <button type="button" class="relative rounded-full    p-1  ">
       <img src="@/assets/icon/Users Group Rounded.svg" alt="">
        </button>

        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div class="">
          <h1 class="text-[#0C0B42] text-sm font-medium ">487</h1>
          </div>
        </div>
      </div>
    </div>
  </div>


</nav>


</template>
