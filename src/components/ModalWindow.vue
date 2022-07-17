<template>
  <div class="modal" v-if="storeShop.showModalPlus || storeShop.showModalPencil" @click.stop="storeShop.hideModal">
    <div v-if="storeShop.newProd || storeShop.updateProd" class="modal__content">
        <div class="success-modal">Success !</div>
    </div>
    <div v-else-if="storeShop.showModalPlus" @click.stop class="modal__content">
        <input type="text" placeholder="Name" name="name" />
        <div class="buttonBlock">
            <button class="button-modal" @click.stop="storeShop.hideModal">Cansel</button>
            <button class="button-modal" @click="storeShop.addNewProduct" >Save</button>
        </div>
    </div>
    <div v-else-if="storeShop.showModalPencil" @click.stop class="modal__content">
        <input type="text" placeholder="Name" name="name" />
        <div class="buttonBlock">
            <button class="button-modal" @click.stop="storeShop.hideModal">Cansel</button>
            <button class="button-modal" @click="storeShop.updateProduct" >Save</button>
        </div>
    </div>
  </div>
</template>

<script setup>

import { useStore } from '../stores/shop'
const storeShop = useStore()

</script>

<style lang="scss">

.buttonBlock {
    display: flex;
    justify-content: space-between;
}
.modal {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    display: flex;
    z-index: 2;
    .button-modal {
        max-width: 100px;
        background: #05A3AD;
        color: white;
        border: 0px;
        margin-top: 15px;
        padding: 10px 25px;
    }
}
.modal__content {
    margin: auto;
    background: white;
    border-radius: 5px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
}
.success-modal {
    text-align: center;
    font-size: 25px;
    color: green;
}
</style>