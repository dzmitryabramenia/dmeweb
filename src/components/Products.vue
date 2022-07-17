<template>
  <div class="header-products">
    <div>
      <span>Equipment List</span>
    </div>
    <div class="header-products-buttons">
      <ButtonPlus @click="storeShop.modalVisible('addProduct')" />
      <ButtonExport/>
      <ButtonMoveAndCopy/>
      <ButtonDelete/>
    </div>
  </div>
    <InputSearchCategory/>
  <div class="container">
    <ProductCard/>
  </div>
    
</template>

<script setup>
  import ButtonPlus from './Buttons/ButtonPlus.vue'
  import ButtonExport from './Buttons/ButtonExport.vue'
  import ButtonDelete from './Buttons/ButtonDelete.vue'
  import ButtonMoveAndCopy from './Buttons/ButtonMoveAndCopy.vue'
  import ProductCard from './ProductCard.vue'
  import InputSearchCategory from './Inputs/InputSearchCategory.vue'
  import { useStore } from '../stores/shop'
  const storeShop = useStore()
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 940px;
}

.header-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #E1E1E1;
  span {
    font-size: 22px;
  }
}

.header-products-buttons{
  display: flex;
  align-items: center;
}

</style>