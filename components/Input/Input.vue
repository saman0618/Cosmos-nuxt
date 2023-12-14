<template>
  <input
    :type="type"
    :class="['input-style', className]"
    :style="inputgroup === 'true' ? {'border-left': '0px', 'border-top-left-radius': '0', 'border-bottom-left-radius': '0'} : {}"
    :placeholder="placeh"
  />
</template>

<script lang="ts">
export default {
  props: {
    placeh: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
    inputgroup: {
      type: String,
    },
  },
};
</script>

<style scoped>
.input-style {
  background-color: white;
  border: 1px solid #DBDBDB;
  outline: none;
  color: #7D7D88;
  font-size: 14px;
  border-radius: 12px;
  display: block;
  width: 100%;
  padding: 14px 16px;
}

/* Добавьте стили для дополнительных классов, если необходимо */
</style>
