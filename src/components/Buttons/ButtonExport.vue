<template>
    <button class="button-export">
        <span class="icon-export"></span>
        <span>Export</span>
    </button>
</template>

<style scoped lang="scss">
.button-export {
    height: 32px;
    width: 90px;
    margin-right: 20px;
    border-radius: 2px;
    border: 1px solid #8C99AF;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
    color: #8C99AF;
    .icon-export {
        background: url("../../assets/export.svg") no-repeat;
        width: 22px;
        height: 22px;
        padding-right: 30px;
    }
}
</style>