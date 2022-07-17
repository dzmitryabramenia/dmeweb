<template>
  <div class="about">
    <HeaderSearch />
    <div class="container-flex">
      <div>
        <SidebarCategory/>
      </div>
      <div>
        <Products/>
      </div>
      
    </div>
    
    <ModalWindow/>
    
  </div>
</template>

<script setup>
  import { onBeforeMount } from 'vue';
  import { useStore } from '../stores/shop'
  import SidebarCategory from '../components/SidebarCategory.vue'
  import Products from '../components/Products.vue'
  import ModalWindow from '../components/ModalWindow.vue';
  import HeaderSearch from '../components/Header.vue'
  const storeShop = useStore()


  onBeforeMount(() => {
      storeShop.getAllCategories()
      
    })

</script>

<style scoped lang="scss">

.container-flex {
  display: grid;
  grid-template-columns: 260px 2fr;
}

</style>