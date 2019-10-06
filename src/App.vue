<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$color-primary:rgb(41, 21, 114);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.title {
  text-align: center;
}
.container{
  padding: 20px 15px;
}
.button {
  border: 1px solid $color-primary;
  border-radius: 5px;
  padding: 10px;
  width:200px;
  height: 50px;
  text-decoration: none;
  &:active {
    transform: translate(0, 3px);
    outline: 0;
    opacity: 1;
  }
  &.__primary {
    background: $color-primary;
    color: #fff;

    &:hover {
      background: #fff;
      color: $color-primary;
    }
  }

  &.__hollow {
    background: #fff;
    color: $color-primary;

    &:hover {
      background: $color-primary;
      color: #fff;
    }
  }
}
</style>
