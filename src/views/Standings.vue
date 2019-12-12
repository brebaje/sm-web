<template>
  <div id="standings" class="view">
    <h1 class="section-title">Standings</h1>
    <ErrorMsg :message="errorMsg" :top="100" :size="'3x'" v-if="error" />
    <LoadingMsg :message="loadingMsg" :top="100" v-else-if="loading" />
    <div class="standings-content" v-else>
      <div id="chart-controls">
        <div id="selector">
          <label for="seasons-select" class="seasons strong">Season</label>
          <select id="seasons-select" v-model="selected">
            <option :key="index" v-for="(item, index) in seasons">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div id="charts">
        <template v-for="(item, index) in charts">
          <LineChart :key="index" :chart="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LineChart from '@/components/Standings/LineChart.vue';
import ErrorMsg from '@/components/ErrorMsg.vue';
import LoadingMsg from '@/components/LoadingMsg.vue';

export default {
  name: 'Standings',
  components: {
    ErrorMsg,
    LineChart,
    LoadingMsg,
  },
  data() {
    return {
      charts: ['General', 'Broker', 'Puntos', 'Rebotes', 'Triples', 'Asistencias'],
      errorMsg: 'Something went wrong :(<br>Please try again!',
      loadingMsg: 'Retrieving standings data...',
      selected: null,
    };
  },
  computed: {
    ...mapState({
      currentSeason: state => state.currentSeason,
      error: state => state.error,
      loading: state => state.loading,
      seasons: state => state.seasons,
      standings: state => state.standings,
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
    seasons: {
      handler() {
        // eslint-disable-next-line prefer-destructuring
        this.selected = this.seasons[0];
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/view";

#standings {
  @extend %view;

  .section-title {
    color: $green;
  }

  #chart-controls {
    @include sm-screen {
      margin-top: 30px;
    }

    @include lg-screen {
      display: flex;
      justify-content: space-between;
    }

    #selector {
      label.seasons {
        color: $green;
        font-size: 1.1em; // TODO general css ? .separator-title
        margin-right: 15px;
      }
    }

    #filters {
      margin-top: 30px;
      text-align: center;

      @include lg-screen {
        margin-top: 0;
        text-align: left;
      }

      label.radio {
        margin-left: 5px;
        margin-right: 15px;
      }
    }
  }
}
</style>
