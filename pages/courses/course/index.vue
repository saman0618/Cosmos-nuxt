<template>
    <div class="flex flex-col gap-4">
        <h1 class="title">Mutaxassislik yo‘nalishim</h1>
        <div class="card flex gap-5 bg-white items-center">
            <img src="~/assets/images/development.svg" alt="">
            <div class="flex justify-center px-4 flex-col gap-5 w-full">
                <div class="header flex items-center gap-[10px]">
                    <h1 class="text-2xl font-bold">Dasturlash</h1>
                    <Badge blue label="3/120 (5%)" />
                    <div class="ml-auto">
                        <Rating :maxStars="5" :initialRating="courseRating" @input="updateUserRating" />
                    </div>
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

        <Collapse :items="scratch" titleCollapse="1 Modul. Scratch" />
        <Collapse :items="code" titleCollapse="2 Modul. Code" />
        <Collapse :items="pencilCode" titleCollapse="3 Modul. PENCILCODE" />
        <Collapse :items="pencilCode" titleCollapse="3 Modul. PENCILCODE" />
    </div>
</template>
<script>
export default {
    methods: {
        updateUserRating(rating) {
            this.courseRating = rating;
        },
    },
    data() {
        return {
            courseRating: 4.5,
            scratch: [
                { number: 1, title: 'Scratch dasturini o‘rnatish', rating: 4, },
                { number: 2, title: 'Scratch dasturi panellari bilan tanishish', rating: 5 },
                { number: 3, title: 'Scratch dasturi panellari bilan tanishish', rating: 0 },
                { number: 4, title: 'Scratch dasturi panellari bilan tanishish', rating: 0 },
            ],
            code: [
                { number: 1, title: 'Scratch dasturini o‘rnatish', rating: 4, },
                { number: 2, title: 'Scratch dasturi panellari bilan tanishish', rating: 5 },
                { number: 3, title: 'Scratch dasturi panellari bilan tanishish', rating: 0 },
                { number: 4, title: 'Scratch dasturi panellari bilan tanishish', rating: 0 },
            ],
            pencilCode: [
                { number: 1, title: 'Scratch dasturini o‘rnatish', rating: 4, },
                { number: 2, title: 'Scratch dasturi panellari bilan tanishish', rating: 5 },
                { number: 3, title: 'Scratch dasturi panellari bilan tanishish', rating: 0 },
                { number: 4, title: 'Scratch dasturi panellari bilan tanishish', rating: 0 },
            ],
        }
    }
};
</script>
