<template>
    <button class="button-pencil">
        <span class="icon-pencil"></span>
    </button>
</template>

<style scoped lang="scss">
.button-pencil {
  cursor: pointer;
  border: 0px;
  position: absolute;
  right: 9px;
  top: 7px;
  width: 35px;
  height: 30px;
  background-color: white;
  display: flex;
  color: #8C99AF;
  .icon-pencil {
        background: url("../../assets/pencil.svg") no-repeat;
        width: 24px;
        height: 24px;
    }
}
  
</style>