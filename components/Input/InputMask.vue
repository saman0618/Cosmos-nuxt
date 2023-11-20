<template>
    <div>
        <input v-model="phoneNumber" id="phoneNumber" type="tel"
            class="bg-white border border-l-0 rounded-t-none rounded-b-none focus:outline-none border-[#DBDBDB] text-[#7D7D88] text-sm rounded-lg block w-full py-3.5 px-4   bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
            :placeholder="placeh" />
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            phoneNumber: "",
        };
    },
    computed: {
        formattedPhoneNumber() {
            // Форматирование номера телефона, добавление знака после каждых трех символов
            return this.phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5");
        },
    },
    watch: {
        formattedPhoneNumber(newValue) {
            // Устанавливаем значение введенного номера телефона с форматированием
            this.phoneNumber = newValue;
        },
    },
    props: {
        placeh: String,
    },
};
</script>
  