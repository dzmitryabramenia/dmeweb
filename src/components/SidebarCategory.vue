<template>
  
  <div class="header-category">
    <div class="header-category-title">
      <span>Categories</span>
    </div>
    <div>
      <ButtonPlus @click="storeShop.modalVisible('addProduct')" />
    </div>
  </div>

    <div v-for="category of storeShop.categories" key="id">

        
          <RouterLink
            class="category-item"
            @click="storeShop.getProductsInASpecificCategory(category)"
            :to="`/catalog/${category.replace(/'/g, '').replace(/ /g, '-')}`"
           >
           <span>{{category}}</span>
          </RouterLink>
      
          <ButtonPencil @click="storeShop.modalVisible('updateProduct')" />
        

    </div>
</template>

<script setup>
  import ButtonPlus from '../components/Buttons/ButtonPlus.vue'
  import ButtonPencil from '../components/Buttons/ButtonPencil.vue'
  import { useStore } from '../stores/shop'

  const storeShop = useStore()
</script>

<style scoped lang="scss">
.header-category {
  display: flex;
  width: 260px;
  height: 49px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #E1E1E1;
  .header-category-title {
    margin-left: 20px;
    span {
      font-size: 22px;
    }
  }
}


.category-item {
  display: flex;
  justify-content: space-between;
  width: 260px;
  height: 40px;
  border: 1px solid #E1E1E1;
  span {
    display: block;
    padding-left: 20px;
    margin-top: 9px;
    color: #14446E;
  }
}
.active {
  border: 1px solid #05A3AD;
  span {
    color: #05A3AD;
    font-weight: 600;
  }
}

</style>