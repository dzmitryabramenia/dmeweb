<template>
    <div class="product-card" v-for="product of storeShop.products" key="id">
      <div class="checkbox-product"><input type="checkbox" name="check" /></div>
      <div class="button-pencil-product"><ButtonPencil @click="storeShop.modalVisible('updateProduct')"/></div>
      <div class="img-product"><img :src="`${product.image}`"/></div>
      <div class="id-product">ID: {{product.id}}</div>
      <div class="title-product">{{product.title}}</div>
    </div>
</template>

<script setup>
  import ButtonPencil from './Buttons/ButtonPencil.vue';
  import { useStore } from '../stores/shop'
  const storeShop = useStore()
</script>

<style scoped lang="scss">
.product-card {
  height: 290px;
  width: 240px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  border: 1px solid #E1E1E1;
  justify-content: space-around;
  margin: 15px;
  padding: 15px;
  position: relative;
    .img-product {
        height: 150px;
        margin-bottom: 10px;
        img {
        display: block;
        max-width: 150px;
        max-height: 150px;
        margin: 0 auto;
        }
    }
    .title-product {
        font-size: 13px;
    }
    .id-product {
        font-size: 16px;
        font-weight: 600;
    }
    .checkbox-product {
        position: absolute;
        right: 15px;
        z-index: 1;
        input {
        width: 16px;
        height: 16px;
        }
    }
    .button-pencil-product {
        position: absolute;
        top: 40px;
        right: -3px;
        z-index: 1;
    }
}

</style>