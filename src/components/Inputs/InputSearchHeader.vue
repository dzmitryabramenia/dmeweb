<template>
    <div class="search">
      <input type="text" placeholder="Search, item, id..."/>
    </div>
</template>

<style scoped lang="scss">
.search {
  width: 247px;
  height: 40px;
  margin-left: 20px;
  
  input {
    background: url("../../assets/search.svg") no-repeat;
    background-position: 5px;
    letter-spacing: 0.1px;
    padding-right: 10px;
    margin: 0px !important;
    border: 0px;
  }
  ::placeholder {
    color: #B7BFCD;
    font-size: 18px;
    padding-left: 15px;
  }
}

</style>