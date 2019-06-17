<template>
  <div id="history" class="view">
    <h1 class="section-title">History</h1>
    <ErrorMsg :message="errorMsg" :size="'3x'" :top="100" v-if="error" />
    <LoadingMsg :message="loadingMsg" :top="100" v-else-if="loading" />
    <div class="history-content" v-else>
      <div id="seasons">
        <SeasonsTable :history="history" />
      </div>
      <div id="leaderboard">
        <LeaderboardTable :history="history" :players="players" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import HistoryService from '@/services/history.service';
import PlayersService from '@/services/players.service';
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
      error: false,
      errorMsg: 'Something went wrong :(<br>Please try again!',
      history: [],
      loading: false,
      loadingMsg: 'Gathering history data...',
      players: [],
    };
  },
  methods: {
    async getData() {
      this.error = false;
      this.loading = true;

      try {
        const hist = await HistoryService.getHistory();
        this.history = _.sortBy(hist, 'year');

        const plys = await PlayersService.getPlayers();
        this.players = _.sortBy(plys, player => _.lowerCase(player.nick));
      }
      catch (error) {
        this.error = true;
      }
      finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getData();
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
