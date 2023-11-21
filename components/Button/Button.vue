<template>
  <button type="button" :class="className"
    class="">
    <div class="flex gap-2 items-center justify-center">
      <!-- Используйте v-if для условного рендеринга изображения -->
      <img v-if="icon" :src="icon" alt="">
      <p :class="labelClass">{{ label }}</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    label: {
        type: String,
      },
      icon: {
        type: String,
      },
      labelClass: {
        type: String,
      },
      className: {
        type: String,
      },
  },
};
</script>

<style scoped>
.custom-button {
  /* Стили для кнопки, по вашему усмотрению */
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
}

.custom-button:hover {
  background-color: #0056b3;
}

.button-icon {
  /* Стили для иконки, если необходимо */
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
