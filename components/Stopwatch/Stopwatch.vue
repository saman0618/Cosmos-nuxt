<template>
    <div>
        <div v-if="!timerRunning">
            
            <button @click="startTimer"><a href="#" class="text-[#0766FF]">Qayta SMS yuborish</a></button>
        </div>
        <div v-else>
            <p class="text-[#0766FF]">Qayta yuborish: <span class="text-red-500">{{ remainingTime }}</span> sekunddan keyin mumkin</p>
        </div>
    </div>
</template>
  
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SmsConfirmation extends Vue {
    timerRunning = false;
    remainingTime = 60;
    timer = null;

    startTimer() {
        this.timerRunning = true;
        this.timer = setInterval(() => {
            this.remainingTime -= 1;
            if (this.remainingTime === 0) {
                this.stopTimer();
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
        this.timerRunning = false;
        this.remainingTime = 60;
    }

    beforeDestroy() {
        this.stopTimer();
    }
}
</script>
  