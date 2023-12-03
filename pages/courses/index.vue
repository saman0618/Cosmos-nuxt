<template>
    <div class="flex flex-col gap-4">
        <h1 class="title">Mutaxassislik yo‘nalishim</h1>
        <div class="card flex gap-5 bg-white items-center">
            <img src="~/assets/images/development.svg" alt="">
            <div class="flex justify-center px-4 flex-col gap-5 w-full">
                <div class="header flex items-center gap-[10px]">
                    <h1 class="text-2xl font-bold">Dasturlash</h1>
                    <Badge blue label="24/100%" />
                </div>
                <div class="progress-section w-full">
                    <div class="w-full bg-lightBlue rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blueTheme h-2.5 rounded-full" style="width: 45%"></div>
                    </div>
                </div>
                <div class="button-section">
                    <button class="button buttonIconFlex" style="border-radius: 99999px;">
                        <img src="@/assets/images/playbutton.svg" alt="">
                        <span>Davom ettirish</span>
                    </button>
                </div>
            </div>
        </div>

        <h1 class="title">Mening kurslarim: </h1>
        <div class="flex items-center gap-6">


            <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full object-cover" src="@/assets/images/cardBanner.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#" class="flex items-center">
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                            After Effects
                        </h5>
                        <div class="inline-block ml-3">
                            <Badge blue label="24 dars" />
                        </div>
                        <div class="ml-auto inline-block">
                            <Badge purple label="DIZAYN" />
                        </div>
                    </a>
                    <p class="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">Animatsion multiklar yaratishni
                        o’rganing. Bu bilan barcha turdagi roliklarni yasay olasiz! Bu bilan barcha turdagi roliklarni yasay
                        olasiz!</p>
                    <a href="#" class="button" style="margin-top: 3rem; border-radius: 99999px;">
                        Davom ettirish
                    </a>
                </div>
            </div>

            <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full object-cover" src="@/assets/images/cardBanner.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#" class="flex items-center">
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                            After Effects
                        </h5>
                        <div class="inline-block ml-3">
                            <Badge blue label="24 dars" />
                        </div>
                        <div class="ml-auto inline-block">
                            <Badge purple label="DIZAYN" />
                        </div>
                    </a>
                    <p class="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">Animatsion multiklar yaratishni
                        o’rganing. Bu bilan barcha turdagi roliklarni yasay olasiz! Bu bilan barcha turdagi roliklarni yasay
                        olasiz!</p>
                    <a href="#" class="button" style="margin-top: 3rem; border-radius: 99999px;">
                        Boshlash
                    </a>
                </div>
            </div>

        </div>
        <h1 class="title">Sizning qiziqishlaringiz bo‘yicha kurslar: </h1>
        <div class="flex items-center gap-6">


            <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full object-cover" src="@/assets/images/cardBanner.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#" class="flex items-center">
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                            After Effects
                        </h5>
                        <div class="inline-block ml-3">
                            <Badge blue label="24 dars" />
                        </div>
                        <div class="ml-auto inline-block">
                            <Badge purple label="DIZAYN" />
                        </div>
                    </a>
                    <p class="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">Animatsion multiklar yaratishni
                        o’rganing. Bu bilan barcha turdagi roliklarni yasay olasiz! Bu bilan barcha turdagi roliklarni yasay
                        olasiz!</p>
                    <a href="#" class="button" style="margin-top: 3rem; border-radius: 99999px;">
                        Kurs haqida
                    </a>
                </div>
            </div>

            <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full object-cover" src="@/assets/images/cardBanner.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#" class="flex items-center">
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                            After Effects
                        </h5>
                        <div class="inline-block ml-3">
                            <Badge blue label="24 dars" />
                        </div>
                        <div class="ml-auto inline-block">
                            <Badge purple label="DIZAYN" />
                        </div>
                    </a>
                    <p class="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">Animatsion multiklar yaratishni
                        o’rganing. Bu bilan barcha turdagi roliklarni yasay olasiz! Bu bilan barcha turdagi roliklarni yasay
                        olasiz!</p>
                    <a href="#" class="button" style="margin-top: 3rem; border-radius: 99999px;">
                        Kurs haqida
                    </a>
                </div>
            </div>
            <Search />
        </div>
    </div>
</template>
<script setup>
import { Search } from '~/components/Search/Search.vue'
</script>
<style>
@import "./courses.css";
</style> 