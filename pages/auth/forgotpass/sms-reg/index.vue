<template>
    <div class="surface w-full h-screen">
        <div class="card">
            <h1 class="title">Ro’yxatdan o’tish</h1>
            <h1 class="text-lg my-2 text-center">
                +998 90 *** *** 22
                <br>
                raqamiga SMS yuborildi
            </h1>
            <div class="flex flex-col gap-5">
                <div class="form">
                    <label for="" class="">Tasdiqlash kodini kiriting</label>
                    <Input />
                </div>
                <div class="text-center">
                    <Stopwatch/>
                </div>
                <div class="flex gap-12 justify-between">
                    <button class="buttonOutline">Orqaga qaytish</button>
                    <button class="button">Tasdiqlash</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../auth.css');
</style>
<script>
export default {
    layout: "auth"
}
</script>
