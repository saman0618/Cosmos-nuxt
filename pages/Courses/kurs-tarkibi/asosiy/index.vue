<template>
    <div>
        <div v-for="(module) in modules" :key="module.id" class="flex flex-col gap-6 py-6">
            <div class="bg-white rounded-t-lg">
                <div class="py-[16px] px-[12px] flex items-center justify-between gap-3 bg-[#E3F8FF] rounded-[12px]">
                    <div class="flex items-center font-medium text-lg gap-3">
                        <img src="~/assets/icon/Drag indicator.svg" />
                        <span>{{ module.name }}</span>
                    </div>
                    <div class="flex gap-3">
                        <button class="button-success">Barchasini nashr qilish</button>
                        <DropdownDots :links="links" />
                    </div>
                </div>
                <div class="content flex flex-col gap-2 p-3">
                    <div v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex">
                        <div class="bg-[#FAFBFE] flex items-center justify-between p-3 rounded-lg">
                            <div class="flex items-center gap-3">
                                <img src="~/assets/icon/Drag indicator.svg" />
                                <span>{{ lesson }}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <button class="button-success">Nashr qilindi</button>
                                <DropdownDots :links="links" />
                            </div>
                        </div>
                    </div>
                    <div v-if="showInput">
                        <div class="bg-[#FAFBFE] flex items-center justify-between p-3 rounded-lg">
                            <div class="flex w-[80%] items-center gap-3">
                                <img src="~/assets/icon/Drag indicator.svg" />
                                <input v-model="newLessonTitle" class="rounded-lg p-3 border border-[#7D7D88] w-full"
                                    placeholder="Yangi dars" />
                            </div>
                            <div class="flex items-center gap-3">
                                <button @click="addNewLesson" class="button-secondary-outline">Bekor qilish</button>
                                <button @click="addNewLesson" class="button-success-outline">Saqlash</button>
                                <DropdownDots :links="links" />
                            </div>
                        </div>
                    </div>
                    <button @click="showNewLessonInput" class="button-primary-outline w-max">
                        <div class="flex items-center gap-1">
                            <img src="~/assets/icon/Add Circle.svg" class="inline-block" />
                            <span>Yangi dars</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <section class="bg-[#E3F8FF] rounded-[12px] py-[16px] px-[12px]">
            <button class="button-primary-outline w-max">
                <div class="flex items-center gap-1">
                    <img src="~/assets/icon/Add Circle.svg" class="inline-block" />
                    <span>Yangi modul</span>
                </div>
            </button>
        </section>
    </div>
</template>
<script>
export default {
    layout: 'kurs-tarkibi',
};
</script>
<script setup>


import { ref } from 'vue';

const links = ref([
    ['Tahrirlash', 'Nusxalash'],
]);

const modules = ref([
    {
        id: 0,
        name: '1 Modul. Scratch dasturi bilan tanishish',
        lessons: ['Scratch dasturini o‘rnatish', 'Spraytlar bilan tanishish'],
    },
    {
        id: 1,
        name: '2 Modul. Scratchda o’yin yaratish',
        lessons: [],
    },
]);
const showInput = ref(false);
const newLessonTitle = ref('');

const showNewLessonInput = () => {
    showInput.value = true;
};

const addNewLesson = () => {
    if (newLessonTitle.value.trim() !== '') {
        modules.value[1].lessons.push(newLessonTitle.value);
        newLessonTitle.value = '';
        showInput.value = false;
    }
};
</script>
  