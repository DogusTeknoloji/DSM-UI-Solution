<template>
    <li class="context-menu-item" >
        <slot />
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .context-menu-item{
        display: block;
        position: relative;
        padding: 2px 2px;
        background: rgb(209,217,224);
        border-radius: 0;
        color: #111111;
        text-decoration: none;
        font-size: 12px;
        width: 100%;
        text-align: left;
        cursor: pointer;
        padding: 8px;

        &:hover,
        &:focus
        {
            background: #8CAFB7;
            color: #ffffff;
            outline: none;
        }

        &:disabled{
            color: #111111 !important;
            background-color: yellow;
        }
    }

    .disabled {
        pointer-events:none; //This makes it not clickable
        opacity:0.6;         //This grays it out to look disabled
    }
</style>