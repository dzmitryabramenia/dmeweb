<template>
    <button class="button-last-modify">
        <span class="icon"></span>
        <span>Last Modify</span>
    </button>
</template>

<style scoped lang="scss">
.button-last-modify {
    height: 40px;
    width: 130px;
    margin-right: 30px;
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
    .icon {
        background: url("../../assets/edit_pencil_line.svg") no-repeat;
        width: 24px;
        height: 24px;
        padding-right: 35px;
    }
}
</style>