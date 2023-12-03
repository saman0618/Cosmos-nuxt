<template>
  <div class="flex h-[100vh]">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Header />
      <div class="flex-3 p-6">
        <Tab />
        <Nuxt />
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
  