<template>
  <div class="flex h-[100vh]">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Header />
      <div class="flex-3 flex flex-col gap-[21px] p-6">
        <Tab />
        <div class="w-full p-4 flex bg-white gap-[24px] h-full rounded-[12px]"
          style="box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Tab from '@/components/Tab/Tab.vue'
</script>
<style scoped>
.app-container {
  display: flex;
  /* flex-direction: column; */
  height: 100vh;
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  flex: 3;
  /* Adjust the proportion as needed */
  padding: 20px;
  /* Add padding as needed */
}

/* Add any other styling for Header and Sidebar here */
</style>
  