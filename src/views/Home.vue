<template>
  <div id="home" class="view">
    <h1 class="title strong a-center">Hermanos de Babas <span class="xx">XV ed.</span></h1>
    <h2 class="sub-title strong a-center"><span class="sm">A Supermanager ACB private league</span></h2>
    <div class="content">
      <GeneralWidget />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GeneralWidget from '@/components/Home/GeneralWidget.vue';

export default {
  name: 'Home',
  components: {
    GeneralWidget,
  },
  computed: {
    ...mapState({
      currentSeason: state => state.currentSeason,
      seasons: state => state.seasons,
    }),
  },
  created() {
    if (this.seasons.length === 0) this.$store.dispatch('getSeasons');
  },
  watch: {
    currentSeason: {
      handler() {
        if (this.currentSeason) this.$store.dispatch('getStandings', this.currentSeason);
      },
    },
  },
};
</script>

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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 30px;
  }
}
</style>
