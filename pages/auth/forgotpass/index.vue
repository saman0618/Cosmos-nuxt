<!--<template>-->
<!--    <div class="surface w-full h-screen">-->
<!--        <div class="card flex flex-col w-1/2 gap-6">-->
<!--            <h1 class="title">Ro’yxatdan o’tish</h1>-->
<!--            <div class="form">-->
<!--                <label for="number">Parol o‘ylab toping</label>-->
<!--                &lt;!&ndash; InputGroup &ndash;&gt;-->
<!--                <div class="flex">-->
<!--                    <span-->
<!--                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">-->
<!--                        <img src="@/assets/images/LoginPass.svg" alt="">-->
<!--                    </span>-->
<!--                    <Input placeh="yangi parol" type="password"-->
<!--                        className="input border-l-0 rounded-t-none rounded-b-none" />-->
<!--                </div>-->
<!--                &lt;!&ndash; InputGroup &ndash;&gt;-->
<!--            </div>-->
<!--            <div class="form">-->
<!--                <label for="number">Parolni tasdiqlang</label>-->
<!--                &lt;!&ndash; InputGroup &ndash;&gt;-->
<!--                <div class="flex">-->
<!--                    <span-->
<!--                        class="inline-flex items-center px-3 text-sm border border-r-0  rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">-->
<!--                        <img src="@/assets/images/LoginPass.svg" alt="">-->
<!--                    </span>-->
<!--                    <Input placeh="yangi parolni takrorlang" type="password"-->
<!--                        className="input border-l-0 rounded-t-none rounded-b-none" />-->
<!--                </div>-->
<!--                &lt;!&ndash; InputGroup &ndash;&gt;-->
<!--            </div>-->
<!--            <div class="flex justify-between">-->
<!--                <button class="buttonOutline">Orqaga qaytish</button>-->
<!--                <button class="button">Davom etish</button>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--export default {-->
<!--    layout: "auth"-->
<!--}-->
<!--</script>-->
<!--<style scoped>@import url('../auth.css');</style>-->
<template>
  <div>
    <component :is="currentStepComponent" @nextStep="nextStep" />
  </div>
</template>

<script>
import Step1 from "~/components/authComponents/forgotPass/Steps/Step1.vue";
import Step2 from "~/components/authComponents/forgotPass/Steps/Step2.vue";
import Step3 from "~/components/authComponents/forgotPass/Steps/Step3.vue"
export default {
  layout: 'auth',
  components: {
    Step1,
    Step2,
    Step3,

  },
  data() {
    return {
      currentStep: 1,
    };
  },
  computed: {
    currentStepComponent() {
      return `Step${this.currentStep}`;
    },
  },
  methods: {
    nextStep() {
      this.currentStep++;
    },
  },
};
</script>

