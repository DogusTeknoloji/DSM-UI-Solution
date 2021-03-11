<template>
    <li class="context-menu-item">
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
        font-size: 13px;
        width: 100%;
        text-align: left;
        cursor: pointer;
        padding: 8px;

        &:hover,
        &:focus{
            background: #21a366;
            color: #ffffff;
            outline: none;
        }
    }
</style>