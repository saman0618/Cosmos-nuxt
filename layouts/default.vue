<template>
  <div class="flex h-[100vh]">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Header />

      <div class="flex-3">
        <Nuxt />

        <Planeta />
        <div class="flex justify-between w-full">
          <div class=" w-full">
            <LiderTablesa />
          </div>
          <Kalendar />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
