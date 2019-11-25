<template>
  <div id="history" class="view">
    <h1 class="section-title">History</h1>
    <ErrorMsg :message="errorMsg" :size="'3x'" :top="100" v-if="error" />
    <LoadingMsg :message="loadingMsg" :top="100" v-else-if="loading" />
    <div class="history-content" v-else>
      <div id="seasons">
        <SeasonsTable />
      </div>
      <div id="leaderboard">
        <LeaderboardTable />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ErrorMsg from '@/components/ErrorMsg.vue';
import LoadingMsg from '@/components/LoadingMsg.vue';
import LeaderboardTable from '@/components/History/LeaderboardTable.vue';
import SeasonsTable from '@/components/History/SeasonsTable.vue';

// media-queries for margins
export default {
  components: {
    ErrorMsg,
    LoadingMsg,
    LeaderboardTable,
    SeasonsTable,
  },
  data() {
    return {
      errorMsg: 'Something went wrong :(<br>Please try again!',
      loadingMsg: 'Retrieving history data...',
    };
  },
  computed: {
    ...mapState({
      error: state => state.error,
      history: state => state.history,
      loading: state => state.loading,
      players: state => state.players,
    }),
  },
  created() {
    if (this.history.length === 0) this.$store.dispatch('getHistory');
    if (this.players.length === 0) this.$store.dispatch('getPlayers');
  },
};
</script>

<style scoped lang="scss">
@import "../styles/view";

#history {
  @extend %view;

  .section-title {
    color: $yellow;
  }

  .history-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 15px;

    #seasons {
      padding-bottom: 25px;

      @include lg-screen {
        margin-right: 15px;
        padding-bottom: 0;
      }
    }

    #leaderboard {
      @include lg-screen {
        margin-left: 15px;
      }
    }
  }
}
</style>
