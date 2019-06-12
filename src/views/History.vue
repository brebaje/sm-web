<template>
  <div id="history" class="view">
    <h1 class="section-title">History</h1>
    <div class="history-content">
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
import LeaderboardTable from '@/components/History/LeaderboardTable.vue';
import SeasonsTable from '@/components/History/SeasonsTable.vue';

// media-queries for margins
export default {
  components: {
    LeaderboardTable,
    SeasonsTable,
  },
  data() {
    return {
      history: [],
      players: [],
    };
  },
  methods: {
    async getData() { // TODO try-catch error component ?
      try {
        const hist = await HistoryService.getHistory();
        this.history = _.sortBy(hist, 'year');

        const plys = await PlayersService.getPlayers();
        this.players = _.sortBy(plys, player => _.lowerCase(player.nick));
      }
      catch (error) {
        throw error;
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
