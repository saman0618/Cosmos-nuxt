<script setup>
const props = defineProps({
  text:String
})
console.log(props.text)
</script>

<template>
  <div>
  
     <button
      v-if="props.text === 'To`liq emas'"
      class="rounded-[8px] text-center text-[16px] p-[8px] bg-[#7D7D88] text-white"
    >
      {{ props.text }}
    </button>
     <button
      v-else-if="props.text === 'Qoralama'"
      class="rounded-[8px] text-center text-[16px] p-[8px] bg-[#7D7D88] text-white"
    >
      {{ props.text }}
    </button>
     <button
      v-else-if="props.text === 'To`liq emas'"
      class="rounded-[8px] text-center text-[16px] p-[8px] bg-[#7D7D88] text-white"
    >
      {{ props.text }}
    </button>
     <button
      v-else-if="props.text === 'To`liq emas'"
      class="rounded-[8px] text-center text-[16px] p-[8px] bg-[#7D7D88] text-white"
    >
      {{ props.text }}
    </button>
     <button
      v-else-if="props.text === 'To`liq emas'"
      class="rounded-[8px] text-center text-[16px] p-[8px] bg-[#7D7D88] text-white"
    >
      {{ props.text }}
    </button>
    <button
      v-else
      class="bg-[#0BB68D] text-white rounded-[8px] text-center text-[16px] p-[8px] bg-[#0BB68D] text-white"
    >
      {{ props.text }}
    </button>
  </div>
</template>