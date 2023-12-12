<template> 
  <button 
    type="button" 
    :class="[className, 'text-white bg-[#0766FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-3.5 me-2 mb-2', darkModeClass]" 
  > 
    <div class="flex items-center justify-center"> 
      <img v-if="icon" :src="icon" alt=""> 
      <p :class="labelClass">{{ label }}</p> 
    </div> 
  </button> 
</template> 
 
<script> 
export default { 
  props: { 
    label: { 
      type: String, 
    }, 
    icon: { 
      type: String, 
      default: null, 
    }, 
    labelClass: { 
      type: String, 
    }, 
    className: { 
      type: String, 
    }, 
  }, 
  computed: { 
    darkModeClass() { 
      return this.$props.className.includes('dark') ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : ''; 
    } 
  }, 
}; 
</script>