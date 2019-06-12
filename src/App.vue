<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
  name: 'App',
};
</script>

<style lang="scss">
body {
  background-color: $bg;
  color: $text;
  font-family: $mainFont;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @include m-screen {
    width: 750px;
  }

  @include lg-screen {
    width: 970px;
  }

  @include xl-screen {
    width: 1170px;
  }
}

#app {

}
</style>
