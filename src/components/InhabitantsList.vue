<template>
  <div class="container">
    <h1 class="title">Brastlewark inhabitants list</h1>
    <div v-for="(inhabitant,index) in inhabitants" v-bind:key="index+10" class="inhabitant__card">
      <div class="inhabitant__image">
        <img :src="inhabitant.thumbnail" />
      </div>
      <div class="inhabitant__info">
        <h4>{{inhabitant.name}}</h4>
      </div>
      <div class="detail__button">
        <button class="button __hollow" @click="goTodetail(inhabitant.id)">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InhabitantsList",
  data() {
    return {};
  },
  computed: {
    inhabitants() {
      return this.$store.getters.getInhabitants.slice(0, 10);
    }
  },
  mounted() {
    //Dispatch the initial load of inhabitants to the store
    this.$store.dispatch("loadInhabitants");
  }
};
</script>

<style scoped lang="scss">
.inhabitant__card {
  width: 90%;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transition: height 0.3s, box-shadow 0.3s;
  &:hover {
    box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
  }
  .inhabitant__info {
    margin: 0 auto;
    text-align: center;
    flex-grow: 2;
  }

  .inhabitant__image {
    max-width: 150px;
    height: 150px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .detail__button {
    padding: 20px;
    text-align: center;
  }
}

@media (min-width: 768px) {
  .inhabitant__card {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
