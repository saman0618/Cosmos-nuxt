<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <Button :text="buttonText" :classes="buttonClasses">
      <template v-slot:label>
        <!-- Дополнительный компонент для label, если необходимо -->
        <span>Additional Label</span>
      </template>
      <template v-slot:icon>
        <!-- Изображение, передаваемое через слот -->
        <img :src="buttonIcon" :alt="buttonText" class="button-icon" />
      </template>
    </Button>
  </div>
</template>

<script>

export default {
  props: {
    buttonText: {
      type: String,
      default: 'Click me',
    },
    buttonIcon: {
      type: String,
      default: null,
    },
    buttonClasses: {
      type: String,
      default: 'text-white bg-[#0766FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
/* Ваши стили могут быть перенесены сюда */
.button-icon {
  /* Стили для изображения, если необходимо */
  width: 20px;
  /* Пример ширины */
  height: 20px;
  /* Пример высоты */
  /* Добавьте другие стили по необходимости */
}
</style>
