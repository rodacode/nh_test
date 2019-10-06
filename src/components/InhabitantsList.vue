<template>
  <div class="container">
    <h1 class="title">Brastlewark inhabitants list</h1>
    {{inhabitants}}
  </div>
</template>

<script>
export default {
  name: 'InhabitantsList',
    data() {
    return {
    };
  },
    computed: {
    inhabitants() {
      return this.$store.getters.getInhabitants.slice(0,10);

    }
  },
  mounted() {
      //Dispatch the initial load of inhabitants to the store
    this.$store.dispatch("loadInhabitants");
  },

}
</script>

<style scoped lang="scss">

</style>
