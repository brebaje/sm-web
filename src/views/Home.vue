<template>
  <div id="home" class="view">
    <h1 class="title strong a-center">Hermanos de Babas <span class="xx">XV ed.</span></h1>
    <h2 class="sub-title strong a-center"><span class="sm">A Supermanager ACB private league</span></h2>
    <div class="content">
      <ErrorMsg :message="errorMsg" :top="100" :size="'3x'" v-if="error" />
      <LoadingMsg :message="loadingMsg" :top="100" v-else-if="loading" />
      <div class="summary" v-else>
        <div class="a-center summary-title">
          <span class="strong title-span">Rankings <span class="current-season">{{ currentSeason }}</span></span>
        </div>
        <div class="widgets">
          <GeneralWidget class="left-widget" />
          <CategoryWidget class="right-widget" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ErrorMsg from '@/components/ErrorMsg.vue';
import LoadingMsg from '@/components/LoadingMsg.vue';
import GeneralWidget from '@/components/Home/GeneralWidget.vue';
import CategoryWidget from '@/components/Home/Widget.vue';

export default {
  name: 'Home',
  components: {
    CategoryWidget,
    ErrorMsg,
    GeneralWidget,
    LoadingMsg,
  },
  data() {
    return {
      errorMsg: 'Something went wrong :(<br>Please try again!',
      loadingMsg: 'Retrieving season data...',
    };
  },
  computed: {
    ...mapState({
      currentSeason: state => state.currentSeason,
      error: state => state.error,
      loading: state => state.loading,
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
    padding-top: 50px;

    .summary-title {
      padding-bottom: 30px;

      .title-span {
        background-color: white;
        border-radius: 4px;
        color: $bg;
        padding: 10px;
        text-transform: uppercase;

        .current-season {
          color: $red;
          font-size: 1.4em;
          padding-left: 15px;
        }
      }
    }

    .widgets {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      .left-widget {
        margin-bottom: 30px;

        @include m-screen {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
