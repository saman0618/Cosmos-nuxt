<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 lg:px-8 pt-5 ">
            <h1 class="text-[18px]">Salom, Bobur 👋</h1>
            <Notification notifText="Sizga bugun 10 token berildi"/>
        </div>
        <div class="px-8 pt-5 ">
            <h1 class="text-[18px]">Siz o‘rganayapsiz</h1>
            <LearningCard/>
            
        </div>
        <div class="px-8 pt-5 ">
            <h1 class="text-[18px]">Sizga tavsiya qilamiz</h1>
            <Recommendation/>
        </div>
        
    </NuxtLayout>
    
</template>