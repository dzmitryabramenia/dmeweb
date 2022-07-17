<template>
    <div class="search-category">
      <input type="text" placeholder="Search category or HCPCS name"/>
    </div>
</template>

<style scoped lang="scss">

.search-category {
  padding: 10px 15px 0 15px;
  input {
    font-size: 16px;
    background: url("../../assets/search.svg") no-repeat;
    background-position: 5px;
    letter-spacing: 0.1px;
    padding-left: 20px;
  }
  ::placeholder {
    color: #B7BFCD;
    font-size: 16px;
    padding-left: 15px;
  }
}

</style>