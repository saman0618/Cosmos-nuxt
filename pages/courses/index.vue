<template>
    <div class="flex flex-col gap-5">
        <h1 class="title">Mutaxassislik yo‘nalishim</h1>
        <div class="card bg-white">
            <div class="flex items-center gap-5">
                <div>
                    <img src="~/assets/images/development.svg" alt="">
                </div>
                <div class="flex flex-col w-full justify-start items-start gap-[18px]">
                    <div class="flex items-center justify-start gap-2">
                        <h1 class="text-2xl font-bold inline-block">Dasturlash</h1>
                        <Badge blue label="24/120 (32%)" />
                    </div>
                    <div class="w-full bg-lightBlue rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blueTheme h-2.5 rounded-full" style="width: 45%"></div>
                    </div>
                    <Button label="Davom Ettirish" className="rounded-full" />
                </div>
            </div>
        </div>
        <!-- Мени курсларим -->
        <h1 class="title">Mening kurslarim</h1>
        <div class="flex items-center gap-6">
            <div
                class="max-w-[50vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full" src="~/assets/images/cardBanner.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <div class="mb-2 gap-2 flex items-center">
                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">After Effects
                            </h5>
                            <Badge blue label="24 dars" /> 
                            <Badge purple label="DIZAYN" class="ml-auto"/> 
                        </div>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Animatsion multiklar yaratishni o’rganing. Bu bilan barcha turdagi roliklarni yasay olasiz! Bu bilan barcha turdagi roliklarni yasay olasiz!</p>
                    <Button label="Davom ettirish" className="rounded-full"/>
                </div>
            </div>
            <div
                class="max-w-[50vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full" src="~/assets/images/cardBanner2.png" alt="" />
                </a>
                <CardContent title=""/>
            </div>
        </div>

        <!-- Мени курсларим -->
    </div>
</template>
  
<script>
export default {
    mounted() {
        this.changePageTitle();
    },
    methods: {
        changePageTitle() {
            this.$store.commit('setPageTitle', 'Kurslar');
        },
    },

};
</script>
  