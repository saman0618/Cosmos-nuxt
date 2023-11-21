<template>
    <div>
        <h1 class="title">Mutaxassislik yo‘nalishim</h1>
        <div class="card flex gap-2 bg-white items-center">
            <div><img src="~/assets/images/development.svg" alt=""></div>
            <div class="flex items-center  flex-col gap-5 w-full">
                <div class="header justify-start flex items-center gap-1">
                    <h1 class="text-2xl font-bold">Dasturlash</h1>
                    <Badge blue label="24/100%" />
                </div>
                <div class="progress-section w-full">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blueTheme h-2.5 rounded-full" style="width: 45%"></div>
                    </div>
                </div>
                <div class="button-section">
                    <Button icon="~/assets/images/playbutton.svg" buttonText="Davom ettirish"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import "./courses.css";
</style>