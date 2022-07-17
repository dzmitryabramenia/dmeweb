<template>
  <div class="header">
    <InputSearchHeader/>
    <div class="nontification">
        <img src="../assets/nontification.svg" />
    </div>
  </div>
  <div class="header-title">
    <div class="title">
        Equipment Catalog
    </div>
    <div>
        <ButtonLastModify />
    </div>
  </div>
  
</template>

<script setup>
import ButtonLastModify from './Buttons/ButtonLastModify.vue';
import InputSearchHeader from './Inputs/InputSearchHeader.vue';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 1200px;
  height: 72px;
  border: 1px solid #E1E1E1;
  justify-content: space-between;
  align-items: center;
  .nontification {
    margin-right: 15px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.header-title {
    display: flex;
    height: 60px;
    width: 1200px;
    border-radius: 0px;
    border: 1px solid #E1E1E1;
    justify-content: space-between;
    align-items: center;
    .title { 
        color: #14446E;
        font-family: Poppins;
        font-size: 28px;
        font-weight: 600;
        line-height: 42px;
        letter-spacing: 0em;
        padding-left: 21px; 
    }
}

</style>