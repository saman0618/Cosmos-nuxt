<template>
    <div class="input-password">
        <input v-model="password" :type="showPassword ? 'text' : 'password'" :placeholder="placeh" />
        <button @click="togglePasswordVisibility">
            <div class="mx-auto">
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path
                        d="M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5ZM3.18 12C4.83 15.36 8.24 17.5 12 17.5C15.76 17.5 19.17 15.36 20.82 12C19.17 8.64 15.76 6.5 12 6.5C8.24 6.5 4.83 8.64 3.18 12Z"
                        fill="black" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M2 5.27L3.28 4L20 20.72L18.73 22L15.65 18.92C14.5 19.3 13.28 19.5 12 19.5C7 19.5 2.73 16.39 1 12C1.69 10.24 2.79 8.69 4.19 7.46L2 5.27ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.35 14.94 12.69 14.83 13L11 9.17C11.31 9.06 11.65 9 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C22.18 14.08 20.79 15.88 19 17.19L17.58 15.76C18.94 14.82 20.06 13.54 20.82 12C19.17 8.64 15.76 6.5 12 6.5C10.91 6.5 9.84 6.68 8.84 7L7.3 5.47C8.74 4.85 10.33 4.5 12 4.5ZM3.18 12C4.83 15.36 8.24 17.5 12 17.5C12.69 17.5 13.37 17.43 14 17.29L11.72 15C10.29 14.85 9.15 13.71 9 12.28L5.6 8.87C4.61 9.72 3.78 10.78 3.18 12Z"
                        fill="black" />
                </svg>
            </div>
        </button>
    </div>
</template>
  
<script>
export default {
    props: {
        placeh: {
            type: String,
            required: true,
        }
    }
}
</script>   
<script setup>
import { ref } from 'vue';

const password = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>
  
  
<style scoped>
.input-password {
    position: relative;
}

input {
    padding: 16px;
    padding-right: 50px;
    width: 200px;
    border: 1px solid #000;
    border-radius: 12px;
    margin-right: 4px;
}

button {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

button svg {
    width: 16px;
    height: 16px;
    fill: #007bff;
}

button:hover svg {
    fill: #0056b3;
    /* Change color on hover if desired */
}
</style>
  