<template>
  <div class="container">
    <h1 class="title">Brastlewark inhabitants list</h1>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search by name.." />
    </div>
    <section v-if="inhabitants.length === 0">
      <p class="title">No matches found...</p>
    </section>
    <div v-for="inhabitant in inhabitants" v-bind:key="inhabitant.id" class="inhabitant__card">
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
    return {
      search: "",
      inhabitantsToDisplay: [],
      limit: 10,
      loading: false,
      errored: false,
      bottom: false
    };
  },
  mounted() {
    //Dispatch the initial load of inhabitants to the store
    this.$store.dispatch("loadInhabitants");
  },
  computed: {
    inhabitants() {
      // getting the inhabitants from the filtered by the search query
      const concat = this.$store.getters.getInhabitants
        .filter(inhabitant => {
          return inhabitant.name
            .toLowerCase()
            .includes(this.search.toLowerCase());
        })
        .slice(
          // Adding the 10 first inhabitants, slicing the inhabitants array
          // into the inhabitantsToDisplay array
          this.inhabitantsToDisplay.length,
          this.inhabitantsToDisplay.length + this.limit
        );
      return this.inhabitantsToDisplay.concat(concat);
    }
  },
  methods: {
    // method to look for the document bottom and manage scroll
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    // function that adds more inhabitants to the inhabitantsToDisplay array
    loadMore() {
      console.log("loading more!");
      const concat = this.$store.getters.getInhabitants.slice(
        this.inhabitantsToDisplay.length,
        this.inhabitantsToDisplay.length + this.limit
      );
      this.inhabitantsToDisplay = this.inhabitantsToDisplay.concat(concat);
    },
    // function to go to the ditail view route
    goTodetail(id) {
      this.$router.push({ name: "detailView", params: { id: id } });
    }
  },
  // watcher for the bottom of the document, if get to the bottom
  // calls the load more action to add more inhabitants to the
  // inhabitantsToDisplay array
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.loadMore();
      }
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.loadMore();
  }
};
</script>
<style scoped lang="scss">
$color-primary:rgb(41, 21, 114);

.search-wrapper {
  width: 300px;
  margin: 0 auto;
  input {
    font-size: 20px;
    width: 100%;
    height: 20px;
    border: 1px solid $color-primary;
    padding: 5px;
    border-radius: 5px;
    margin-left: -5px;
  }
}
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
