<template>
    <main>
        <Card/>
        <Setting :setting="$store.state.figure.cube"/>
    </main>
</template>



<script>
  import Setting from "../components/Setting";
  import Card from "../components/Card";
  export default {
    name: "Main",
    data() {
      return {

      }
    },
    computed:{
    },
    components: {
        Card,
        Setting
    },
  }
</script>



<style scoped lang="scss">
    main{
        display: flex;
        margin: 25px;
    }
</style>
