// validation.js
import { extend } from 'vee-validate';
import { required, regex } from 'vee-validate/dist/rules';

extend('phone', {
  ...required,
  validate: (value) => {
    return /^(\+998-?)?\d{2}-?\d{3}-?\d{2}-?\d{2}$/.test(value);
  },
  message: 'Введите корректный номер телефона',
});

// Добавьте другие правила валидации при необходимости
