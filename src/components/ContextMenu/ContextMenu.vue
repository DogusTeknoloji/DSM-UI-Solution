<template>
    <div class="context-menu" id="right-click-menu" ref="popper" v-show="isVisible" tabindex="-1" v-click-outside="close" @contextmenu.capture.prevent>
        <ul>
            <slot :contextData="contextData" />
        </ul>
    </div>
</template>
<script>
//import Popper from '@popperjs/core';
import { createPopper, preventOverflow, flip } from '@popperjs/core';
import ClickOutside from 'vue-click-outside';
export default {
    props: {
        boundariesElement: {
            type: String,
            default: 'body'
        }
    },
    components:{
        //Popper
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

            
            const element = document.querySelector(this.boundariesElement);
            this.popper = createPopper(this.referenceObject(event), this.$refs.popper, {
                placement: 'right-start',
                modifiers: [{
                        name: 'preventOverflow',
                        enabled: false,
                        options: {
                            boundary: element,
                            mainAxis: false,
                        }
                    }, {
                        name: 'offset',
                        enabled: true,
                        options: {
                            offset: [0,90]
                        }
                    }
                ]
            });

            // ReCalculate Context Position
            this.$nextTick( () => {
                this.popper.update();
            });
        },
        close(){
            this.opened = false;
        },
        referenceObject(event){
            //const rect = event.target.getBoundingClientRect();
            console.log(event);
            const left = event.clientX + 200;
            const top = event.clientY + 50
            const right = left + 1;
            const bottom =  top + 1;
            const clientWidth = 1;
            const clientHeight = 1;

            function getBoundingClientRect(){
                console.log ("left:" + left + "top:" + top + "right:" + right + "bottom:" +bottom);
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
        background: #FAFAFA;
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