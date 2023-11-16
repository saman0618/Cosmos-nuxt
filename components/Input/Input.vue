<template>
    <input :type="type"
        class="input"
        :class="className"
        :placeholder="placeh">
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
        }
    }
}
</script>