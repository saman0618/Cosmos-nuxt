<template>
    <div class="flex flex-col gap-5">
        <Breadcumb pathone="Dasturlash" pathtwo="1 modul scratch" active="1 dars" />
        <div class="p-6 rounded-xl bg-white shadow-themed">
            <h1 class="title">{{ data[0].title }}</h1>
        </div>
        <div class="p-6 rounded-xl bg-yellowBg">
            <h1 class="title">Bugun nimalar o'rganamiz?</h1>
            <ul class="px-8 py-3">
                <li class="list-disc" v-for="(item, index) in planList" :key="index">{{ item.title }}</li>
            </ul>
        </div>
        <h1 class="title">Video dars bilan tanishing</h1>
        <img src="@/assets/images/vdBanner.png" alt="" srcset="">

        <h1 class="title">Darsning nazariy qismi</h1>
        <p>{{ data[0].nazariy }}</p>

        <div class="p-6 rounded-xl bg-white shadow-themed flex gap-6 flex-col">
            <h1 class="title">Dars uchun kerakli resurslar</h1>
            <a class="text-mainBlue font-medium" :href="data[0].resources[0].link">{{ data[0].resources[0].resourceName
            }}</a>
        </div>

        <div class="bg-lightBlue p-6 flex flex-col gap-6 rounded-xl border border-[#CFECF5]">
            <h1 class="title text-dark">Uyga vazifa</h1>
            <p>{{ data[0].homework[0].mainHomework }}</p>
            <p class="text-orange">Formati: {{ data[0].homework[0].format }}</p>
            <Input placeh="Uyga vazifa havolasini joylashtiring" />
            <button class="button buttonIconFlex w-max" style="border-radius: 99999px;">
                <img src="@/assets/images/playbutton.svg" alt="">
                <span class="uppercase">yuborish</span>
            </button>
        </div>

        <div class="bg-lightCyan p-6 flex flex-col gap-6 rounded-xl border border-[#CFECF5]">
            <h1 class="title text-dark">Uyga vazifa</h1>
            <div class="flex w-full">
                <img src="@/assets/images/mentorAvatar.svg" class="w-max h-max" alt="">
                <div class="flex flex-col w-full gap-[12px] px-2">
                    <div class="flex items-center">
                        <span>{{ data[0].mentor[0].name }}</span>
                        <Rating :initialRating="data[0].mentor[0].mentorRating"/> 
                    </div>
                    <div class="p-[18px] rounded-full bg-white w-full" v-for="(message, index) in messages" :key="index">
                        {{ message.content }}
                    </div>
                </div>
            </div>
            <Input class="border-none" style="border-radius: 99999px;" placeh="https://www.tyroleadership.com/interzygapophysial/coelenteric17874.html"/>
            <button class="button buttonIconFlex w-max" style="border-radius: 99999px;">
                <img src="@/assets/images/playbutton.svg" alt="">
                <span class="uppercase">qayta yuborish</span>
            </button>
            
            <div class="flex justify-between">
                <button class="buttonOutlineColored buttonIconFlex">
                    <img src="@/assets/icon/arrow.svg" class="rotate-180" alt="">
                    <span>Avvalgi dars</span>
                </button>
                <button class="buttonOutlineColored buttonIconFlex">
                    <span>Keyingi dars</span>
                    <img src="@/assets/icon/arrow.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            data: [
                {
                    title: 'Dasturlash',
                    nazariy: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    resources: [
                        {
                            link: '#',
                            resourceName: 'Scratch download'
                        }
                    ],
                    homework: [
                        {
                            mainHomework: 'Scratch dasturida mushkchani harakatlantirish',
                            format: 'Havola yuborish'
                        }
                    ],
                    mentor: [
                        {
                            name: "Rustamov Davron",
                            mentorRating: 5
                        }
                    ]
                },
            ],
            planList: [
                { title: 'Scratch bu nima?' },
                { title: 'Scratch dasturini o’rnatish' },
                { title: 'Scratch dasturida ro’yxatdan o’tish' },
                { title: 'Scratch oynalari bilan tanishish' },
            ],
            messages: [
                { content: 'Uyga vazifangiz yaxshi bajarilgan. Spraytlarni to’g’ri joylashtirgansiz!' },
                { content: 'Uyga vazifangiz yaxshi bajarilgan. Spraytlarni to’g’ri joylashtirgansiz!' },
            ]
        };
    },
};
</script>
  