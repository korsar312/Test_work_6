<template>
    <div class="settingRow">
        <div>
            <h1>{{setting[0]}}</h1>
        </div>

        <div>
            <input type="number" v-model="param">
        </div>
    </div>
</template>

<script>
    export default {
        name: "SettingRow",
        data(){
            return{
            }
        },
        computed:{
            param:{
                get(){
                    return this.obj[this.setting[2]]
                },
                set(val){
                    this.$store.commit('changePos', {side: this.setting[2], obj: this.obj, shift: Math.abs(val)})
                }
            }
        },
        props:{
            setting:{
                type: Array,
                default(){return []}
            },
            obj:{
                type: Object,
                default(){return {}}
            }
        }
    }
</script>

<style scoped>
    .settingRow{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10px;
    }
</style>