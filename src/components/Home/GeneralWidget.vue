<template>
  <div class="widget">
    <div class="widget-title">
      Rankings <span class="current-season strong">{{ currentSeason }}</span>
    </div>
    <ErrorMsg v-if="error" />
    <LoadingMsg v-else-if="loading" />
    <table v-else>
      <tbody>
        <tr :key="item.player" v-for="(item, index) in table">
          <td class="a-center rank" :class="getRankingClass(index)">{{ item.position }}</td>
          <td class="a-center">
            <font-awesome-icon size="lg" icon="angle-up" class="position up" v-if="item.previousPosition === 'up'" />
            <font-awesome-icon size="lg" icon="angle-down" class="position down" v-else-if="item.previousPosition === 'down'" />
            <font-awesome-icon icon="equals" class="position same" v-else />
          </td>
          <td>{{ item.player }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ErrorMsg from '@/components/ErrorMsg.vue';
import LoadingMsg from '@/components/LoadingMsg.vue';

export default {
  name: 'Widget',
  components: {
    ErrorMsg,
    LoadingMsg,
  },
  computed: {
    ...mapState({
      currentSeason: state => state.currentSeason,
      error: state => state.error,
      loading: state => state.loading,
      standings: state => state.standings,
    }),
    table() {
      const total = this.standings.length;

      if (total > 0) {
        const data = this.standings[total - 1].General;
        const previousData = this.standings[total - 2] ? this.standings[total - 2].General : null;
        const sortedList = Object.keys(data).sort((a, b) => data[b] - data[a]);
        const previousSortedList = previousData ? Object.keys(previousData).sort((a, b) => previousData[b] - previousData[a]) : null;
        const result = [];

        sortedList.forEach((player, index) => {
          const position = index + 1;
          let previousPosition = null;
          if (previousSortedList) previousPosition = previousSortedList.indexOf(player) + 1;
          if (previousPosition) previousPosition = this.getPositionChange(position, previousPosition);

          result.push({
            player,
            position,
            previousPosition,
          });
        });

        return result;
      }

      return [];
    },
  },
  methods: {
    getPositionChange(current, previous) {
      if (current === previous) return 'none';
      if (current < previous) return 'up';
      return 'down';
    },
    getRankingClass(position) {
      if (position + 1 === 1) return 'first';
      if (position + 1 <= 5) return 'top';

      return 'bottom';
    },
  },
};
</script>

<style scoped lang="scss">
.widget {
  border: 2px solid white;

  .widget-title {
    background-color: white;
    color: $bg;
    padding: 5px;
    text-align: center;

    .current-season {
      color: $red;
      font-size: 0.9em;
    }
  }

  table {
    padding: 15px;

    td {
      padding: 2px 5px;

      &.rank {
        font-size: 1.2em;

        &.bottom {
          background-color: rgba($red, 0.8);
        }

        &.first {
          background-color: rgba($yellow, 0.95);
        }

        &.top {
          background-color: rgba($green, 0.8);
        }
      }

      .position {
        margin-left: 10px;

        &.down {
          color: $red;
        }

        &.same {
          color: $blue;
        }

        &.up {
          color: $green;
        }
      }
    }
  }
}
</style>
