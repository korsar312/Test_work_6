<template>
    <div v-on:mousedown="startSize($event)"/>
</template>

<script>
    export default {
        name: "ReSize",
        data(){
            return{
                figure: this.obj
            }
        },
        methods:{
            startSize(event){
                this.$store.state.coord = this.size(event)
                document.addEventListener('mousemove', this.editSize)
                document.addEventListener('mouseup', this.endSize)
            },
            endSize(){
                document.removeEventListener('mousemove', this.editSize)
                document.removeEventListener('mouseup', this.endSize)
            },

            editSize(event) {
                let newCoord = this.size(event)
                let shift = this.$store.state.coord - newCoord

                this.$store.commit('changeSize', {side: this.side, obj: this.figure, shift, newCoord})
            },
            size(event){
                switch (this.side) {
                    case 'top':
                    case 'bot': return event.pageY
                    case 'left':
                    case 'right': return event.pageX
                    case 'center': return [event.pageX,event.pageY]
                }
            },
        },
        props:{
            side:{
                type: String,
                default(){return ''}
            },
            obj:{
                type: Object,
                default(){return {}}
            }
        },
    }
</script>

<style scoped>

</style>