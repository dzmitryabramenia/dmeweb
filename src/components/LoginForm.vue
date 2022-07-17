<template>
  <div class="container">
      <input type="text" v-model="username" placeholder="Enter Login" required>
      <input type="password" v-model="password" placeholder="Enter Password" required>
      <button type="submit" @click="loginForm">Login</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { onBeforeMount } from 'vue';
  import { useStore } from '../stores/shop'
  const storeShop = useStore()

  const router = useRouter()
  const username = ref('')
  const password = ref('')

  const loginForm = () => {
      if(username.value.length && password.value.length) {
          router.push('/catalog')
      }
  }

  onBeforeMount(() => {
    storeShop.getAllCategories()
  })
</script>

<style scoped lang="scss">

button {
  background-color: #05A3AD;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
}
.container {
  padding: 16px;
  width: 300px;
  border: 1px solid #E1E1E1;
}
span.psw {
  float: right;
  padding-top: 16px;
}



</style>