<template>
    <div class="relative mb-6">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <div class="icon">
                <img :src="icon" alt="">
            </div>
        </div>
        <Input/>
    </div>
</template>
<script>
import Input from './Input.vue'
export default {
    components: {
        Input
    },
    props: {
        placeh: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
        }
    }
}
</script>