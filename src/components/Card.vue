<template>
    <div class="card" :style="`min-height: ${height}px; min-width: ${width}px;`">
        <Item :obj="$store.state.figure.cube"/>
    </div>
</template>

<script>
    import Item from "./Item";
    export default {
        name: "Card",
        components: {Item},
        computed:{
            height(){return this.$store.state.card.height},
            width(){return this.$store.state.card.width}
        },
        methods:{

        },
    }
</script>

<style scoped lang="scss">
    .card{
        position: relative;
        border: black 1px solid;
        overflow: hidden;
    }

</style>