<template>
  <table>
    <thead>
      <tr>
        <td colspan="2" class="strong a-center">Leaderboard</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr :key="item.nick" v-for="item in board">
        <td>
          {{ item.nick }} <span class="inactive" v-if="!item.active">retired</span>
        </td>
        <td>
          <span :key="`w${win}`" v-for="win in item.w" class="award">
            <font-awesome-icon icon="trophy" class="first-place" />
          </span>
          <span :key="`s${sec}`" v-for="sec in item.s" class="award">
            <font-awesome-icon icon="medal" class="second-place" />
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      board: [],
    };
  },
  props: ['history', 'players'],
  methods: {
    calcRankings() {
      if (!_.isEmpty(this.history) && !_.isEmpty(this.players)) {
        const rankings = [];

        this.players.forEach((player) => {
          const p = {
            nick: player.nick,
            w: 0,
            s: 0,
            active: player.active ? 1 : 0,
          };

          this.history.forEach((season) => {
            if (season.winner === player.nick) p.w += 1;
            else if (season.second === player.nick) p.s += 1;
          });

          rankings.push(p);
        });

        this.board = _.orderBy(rankings, ['w', 's', 'active', 'nick'], ['desc', 'desc', 'desc', 'asc']);
      }
    },
  },
  watch: {
    // both are obtained async in parent
    // TODO maybe use state
    history: {
      handler() {
        this.calcRankings();
      },
      immediate: true,
    },
    players: {
      handler() {
        this.calcRankings();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
// TODO DRY refactor pending
table {
  border-collapse: collapse;;

  thead {
    td {
      border-bottom: 1px solid white;
      font-size: 1.1rem;
      text-align: center;
      text-transform: uppercase;
    }
  }

  td {
    padding: 10px 15px;

    .award {
      display: inline-block;
      margin-right: 3px;
    }

    .inactive {
      color: $red;
      font-size: 0.75rem;
    }
  }
}
</style>
