<template>
    <div class="context-menu" id="right-click-menu" ref="popper" v-show="isVisible" tabindex="-1" v-click-outside="close" @contextmenu.capture.prevent>
        <ul>
            <slot :contextData="contextData" />
        </ul>
    </div>
</template>
<script>
import Popper from 'popper.js';
import ClickOutside from 'vue-click-outside';
export default {
    props: {
        boundariesElement: {
            type: String,
            default: 'body'
        }
    },
    data(){
        return {
            opened: false,
            contextData: {}
        };
    },
    directives:{
        ClickOutside
    },
    computed:{
        isVisible(){
            return this.opened;
        }
    },
    methods:{
        open(event,contextData){
            this.opened = true;
            this.contextData = contextData;
            
            if (this.popper){
                this.popper.destroy();
            }

            const refObj = this.referenceObject(event,this.$el);
            this.popper = new Popper(refObj, this.$refs.popper, {
                placement: 'right-end',
                modifiers: []                
            });
            this.$nextTick( () => {
                this.popper.scheduleUpdate();
            });
        },
        close(){
            this.opened = false;
        },
        referenceObject(event, contextMenu){
            const left = (event.clientX - (contextMenu.clientWidth / 4 * 3 ));
            const top = (event.clientY - (contextMenu.clientHeight / 3 * 2));
            const right = left + 1;
            const bottom =  top + 1;
            const clientWidth = 1;
            const clientHeight = 1;
                       
            function getBoundingClientRect(){
                return {
                    left,top,right,bottom
                };
            }

            const obj = {
                getBoundingClientRect,
                clientWidth,
                clientHeight
            };

            return obj;
        },
        beforeDestroy() {
            if (this.popper !== undefined){
                this.popper.destroy();
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    .context-menu {
        position: absolute;
        overflow: hidden;
        border-radius: 4px;
        &:focus{
            outline: none;
        }
    }

     ul{
        padding: 0px;
        margin: 0px;
    }

    #right-click-menu{
        background: rgb(209,217,224);
        border: 1px solid #BDBDBD;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 250px;
        z-index: 999999;

    }

    #right-click-menu li {
        border-bottom: 1px solid #E0E0E0;
        margin: 0;
        padding: 5px 35px;  
    }

    #right-click-menu li:last-child{
        border-bottom: none;
    }

 
</style>