<template>
  <div class="container">
    <h1 class="title">{{inhabitant.name}}</h1>

    <div class="inhabitant__image">
      <img :src="inhabitant.thumbnail" />
    </div>
    <div class="inhabitant__info">
      <p>
        <strong>Age:</strong>
        {{inhabitant.age}}
      </p>
      <p>
        <strong>Weight:</strong>
        {{inhabitant.weight}}
      </p>
      <div>
        <p>
          <strong>Professions:</strong>
        </p>
        <ul>
          <li v-for="profession in inhabitant.professions" v-bind:key="profession.id">{{profession}}</li>
        </ul>
      </div>
      <div>
        <p>
          <strong>Friends:</strong>
        </p>
        <ul>
          <li v-for="friend in inhabitant.friends" v-bind:key="friend.id">{{friend}}</li>
        </ul>
      </div>
    </div>
    <div class="detail__button">
      <router-link class="button __hollow" to="/">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "InhabitantDetail",
  props: {
    id: Number
  },
  data() {
    return {
      inhabitant: []
    };
  },
  mounted() {
    // Get the Inhabitant with the getter from the store 
    // passing the id from the props
    this.inhabitant = this.$store.getters.getInhabitantById(this.id);
  }
};
</script>
<style scoped lang="scss">
ul {
  list-style: none;
}
.inhabitant__info {
  width:90%;
  margin: 0 auto;
}

.inhabitant__image {
  max-width: 250px;
  height: 250px;
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


@media (min-width: 768px) {
.inhabitant__info {
  width:50%;
  margin: 0 auto;
}
}
</style>
