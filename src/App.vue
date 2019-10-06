<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title {
  text-align: center;
}
.container{
  padding: 20px 15px;
}
.button {
  border: 1px solid rgb(41, 21, 114);
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
    background: rgb(41, 21, 114);
    color: #fff;

    &:hover {
      background: #fff;
      color: rgb(41, 21, 114);
    }
  }

  &.__hollow {
    background: #fff;
    color: rgb(41, 21, 114);

    &:hover {
      background: rgb(41, 21, 114);
      color: #fff;
    }
  }
}
</style>
