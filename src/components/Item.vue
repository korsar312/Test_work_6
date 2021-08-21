<template>
    <div class="cube" :style="`height: ${height}px; width: ${width}px; top: ${top}px; left: ${left}px`">

        <ReSize class="top width"       :side="'top'"   :obj="obj"/>
        <ReSize class="right height "   :side="'right'" :obj="obj"/>
        <ReSize class="bot width"       :side="'bot'"   :obj="obj"/>
        <ReSize class="left height "    :side="'left'"  :obj="obj"/>

        <ReSize class="center"          :side="'center'" :obj="obj"/>

    </div>
</template>

<script>
    import ReSize from "./ReSize";

    export default {
        name: "Item",
        components: {ReSize},
        data(){

        },
        computed:{
            top(){return this.obj.top},
            left(){return this.obj.left},
            height(){return this.obj.height},
            width(){return this.obj.width},
        },
        props:{
            obj:{
                type:Object,
                default(){return {}}
            }
        }
    }
</script>

<style scoped lang="scss">
    .cube{
        position: absolute;
        background: olivedrab;

    div{
        background: red;
        position: absolute;
    }

    .width{
        width: 20px;
        height: 6px;
        left: calc(50% - 10px);
        cursor: row-resize;
    }
    .height{
        width: 6px;
        height: 20px;
        top: calc(50% - 10px);
        cursor: col-resize;
    }
    .center{
        width: 6px;
        height: 6px;
        top: calc(50% - 3px);
        left: calc(50% - 3px);
        cursor: grab;
    }

    .top{
        top: -3px;
    }
    .right{
        right: -3px;
    }
    .bot{
        bottom: -3px;
    }
    .left{
        left: -3px;
    }
    }
</style>