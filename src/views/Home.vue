<template>
  <div id="home" class="view">
    <h1 class="title strong a-center">Hermanos de Babas <span class="xx">XV ed.</span></h1>
    <h2 class="sub-title strong a-center"><span class="sm">A Supermanager private league</span></h2>
    <div class="content">
      <p class="a-center">Coming soon!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/view";

#home {
  @extend %view;

  .title {
    color: orange;
    font-size: 2rem;

    .xx {
      color: $red;
      font-size: 1.3rem;
    }
  }

  .sub-title {
    font-size: 1.3rem;

    .sm {
      color: $blue;
    }
  }

  .content {
    padding-top: 15px;
  }
}
</style>
