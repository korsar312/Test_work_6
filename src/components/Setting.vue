<template>
    <div class="wrapper">
        <SettingRow v-for="(item, index) in items" :key="index" :setting="item" :obj="setting"/>
    </div>
</template>

<script>
    import SettingRow from "./SettingRow";
    export default {
        name: "Setting",
        components: {SettingRow},
        data(){
            return{
                items:[
                    ['Top',this.setting.top,'top'],
                    ['Left',this.setting.left,'left'],
                    ['Height',this.setting.height,'height'],
                    ['Width',this.setting.width,'width'],
                ]
            }
        },
        props:{
            setting:{
                type:Object,
                default(){return{}}
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        display: flex;
        flex-direction: column;
        flex: 1
    }

</style>