<template>
  <button class="button-plus">
    <span class="icon-plus"></span>
  </button>
</template>

<style scoped lang="scss">
.button-plus {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 30px;
  height: 30px;
  background: #05A3AD;
  border-radius: 2px;
  border: 0px;
  .icon-plus {
    background: url("../../assets/plus.svg") no-repeat;
    width: 24px;
    height: 24px;
    flex: none;
  }
}

</style>