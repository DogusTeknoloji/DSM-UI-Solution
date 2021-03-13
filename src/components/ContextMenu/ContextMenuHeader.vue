<template>
    <li class="context-menu-header">
        <slot />
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .context-menu-header {
        display:block;
        position:relative;
        padding: 2px 2px;
        background: #8CAFB7;
        border-radius: 0;
        color: #1c282f;
        text-decoration: none;
        font-size: 14px;
        font-weight: 550;
        font-style: normal;
        width: 100%;
        text-align: center;
        cursor: default;
        padding: 1px 10px !important; 
        padding-bottom: px !important;
    }
</style>