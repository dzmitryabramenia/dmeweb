<template>
    <button class="button-trash">
        <span class="icon-trash"></span>
        <span>Delete</span>
    </button>
</template>

<style scoped lang="scss">
.button-trash {
    height: 32px;
    width: 90px;
    margin-right: 20px;
    border-radius: 2px;
    border: 1px solid #E1E1E1;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
    color: #E1E1E1;
    .icon-trash {
        background: url("../../assets/trash.svg") no-repeat;
        width: 22px;
        height: 22px;
        padding-right: 30px;
    }
}
</style>