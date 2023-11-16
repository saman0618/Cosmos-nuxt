<script lang="ts">

export default {
    name: "Navbar",
    props: ["navbar"],
};
</script>

<template>
    <div class="px-4 py-2 w-max inline-block bg-white overflow-auto h-[100vh] " style="box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05)">
        <img src="@/assets/images/logo.png" alt="" />
        <section class="flex flex-col">
            <h1 class="flex px-2 text-main-blue text-base font-medium mt-8">
                <img class="mr-1" src="@/assets\icon\Home Smile Angle.svg" alt="" />Bosh
                sahifa
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Laptop.svg" alt="" />Kurslar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Checklist Minimalistic.svg" alt="" />Testlar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Users Group Rounded.svg" alt="" />O‘quvchilar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Case Minimalistic.svg" alt="" />Hodimlar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Letter.svg" alt="" />SMS xabarlar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Cart.svg" alt="" />Shop
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Calendar.svg" alt="" />Tadbirlar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Shield Star.svg" alt="" />Yutuqlar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Cup Star.svg" alt="" />Reytinglar
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Pie Chart 2.svg" alt="" />Analitika
            </h1>
            <h1 class="flex px-2 text-gray1 mt-8 text-base font-medium">
                <img class="mr-1" src="@/assets\icon\Gamepad.svg" alt="" />O‘yinlar
            </h1>
        </section>
        <h1 class="text-base text-[#63628266] font-medium px-2 mt-14">
            KOSMOS © 2023
        </h1>
    </div>
</template>
<style>
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: transparent;
}

::-webkit-scrollbar-thumb:window-inactive {
    background: transparent;
}
</style>