<template>
  <div class="widget">
    <div class="strong widget-title">General</div>
    <div class="widget-content">
      <table>
        <thead>
          <tr>
            <td colspan="4" class="strong a-center table-title">Week #{{ currentWeek }}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.player" v-for="(item, index) in table">
            <td class="a-center rank" :class="getRankingClass(index)">{{ item.position }}</td>
            <td class="a-center">
              <font-awesome-icon size="lg" icon="angle-up" class="position up" v-if="item.previousPosition === 'up'" />
              <font-awesome-icon size="lg" icon="angle-down" class="position down" v-else-if="item.previousPosition === 'down'" />
              <font-awesome-icon icon="equals" class="position same" v-else />
            </td>
            <td class="player">{{ item.player }}</td>
            <td class="a-right total">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GeneralWidget',
  computed: {
    ...mapState({
      standings: state => state.standings,
    }),
    currentWeek() {
      if (this.standings) return this.standings.length;

      return 0;
    },
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
            value: data[player],
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
@import '../../styles/widgets';

.widget {
  @extend %widget;

  .widget-content {
    padding: 15px 0 25px 25px;

    table {
      border-collapse: collapse;

      td {
        font-size: 1.1em;
        padding: 5px 5px;

        &.table-title {
          font-size: 1.2em;
          padding-bottom: 20px;
        }

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

        &.player {
          padding-right: 15px;
        }

        &.total {
          background-color: white;
          color: $bg;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
